const fs = require("fs");
const path = require("path");
const littlelog = require("@littlethings/log");

const log = littlelog.create("Auto Issue");

littlelog.setVerbosity("INFO");

const ROOT_DIR = path.resolve(process.env.GITHUB_WORKSPACE);
const TITAN_CONFIG = require(path.resolve(ROOT_DIR, "package.json")).titan;

const getPackages = () => {
    let pkgs = [];

    const rootPkgPaths = TITAN_CONFIG.packages.map((pkgPath) =>
        path.resolve(ROOT_DIR, pkgPath.replace(/\*$/, ""))
    );

    for (const rootPkgPath of rootPkgPaths) {
        for (const name of fs.readdirSync(rootPkgPath)) {
            if (fs.statSync(path.resolve(rootPkgPath, name)).isDirectory()) {
                try {
                    const pkg = require(path.resolve(
                        rootPkgPath,
                        name,
                        "package.json"
                    ));

                    pkgs.push(pkg.name);
                } catch (error) {
                    log.error(error);
                }
            }
        }
    }

    return pkgs;
};

const getAffectedPackages = (body) => {
    const lines = body.split("\n");
    const start = lines.findIndex((line) =>
        line.match(/<!-- @region: affected -->/)
    );
    const end = lines.findIndex((line) =>
        line.match(/<!-- @endregion: affected -->/)
    );

    if (start === -1 || end === -1) {
        log.info("Could not find region for affected packages.");
        return [];
    }

    const pkgs = lines.slice(start, end).reduce((acc, line) => {
        const match = line.match(/^\-\s+\[(x| )\] ([^\s]+)/);
        if (match && match[1].toLowerCase() === "x") {
            return acc.concat(match[2]);
        }

        return acc;
    }, []);

    log.info("Found affected packages:");
    log.info(pkgs.join(", "));

    return pkgs;
};

const intersect = (xs, ys) => {
    return xs.reduce((acc, x) => {
        if (ys.includes(x)) {
            return acc.concat(x);
        }

        return acc;
    }, []);
};

module.exports = async ({ github, context }) => {
    const creator = context.payload.sender.login;

    log.info(`Issue from "${creator}".`);

    const opts = github.issues.listForRepo.endpoint.merge({
        ...context.issue,
        creator,
        state: "all",
    });

    const issues = await github.paginate(opts);

    const isFirstSubmission = issues.length === 1;

    if (isFirstSubmission) {
        log.info(`First submission from "${creator}", adding welcome comment.`);
        const body = fs.readFileSync(path.resolve(__dirname, "welcome.md"), {
            encoding: "utf8",
        });

        await github.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body,
        });
    }

    log.info("Assigning default assignees to issue.");
    await github.issues.addAssignees({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        assignees: ["jakehamilton"],
    });

    const issueBody = context.payload.issue.body
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "\n");

    const labels = [];

    for (const line of issueBody.split("\n")) {
        const match = line.match(/^<!-- @type: (\w+) -->$/);
        if (match) {
            log.info(`Found issue type "${match[1]}".`);
            if (match[1] === "bug" || match[1] === "feature") {
                labels.push(match[1]);
            } else {
                labels.push("invalid");
            }
            break;
        }
    }

    const pkgLabels = intersect(getPackages(), getAffectedPackages(issueBody));

    await github.issues.addLabels({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        labels: ["needs triage", ...labels, ...pkgLabels],
    });
};
