const { useHTTP } = require("@leverage/plugin-http");
const fs = require("fs");
const path = require("path");

const readme = fs.readFileSync(path.resolve(__dirname, "../../README.md"), {
    encoding: "utf8",
});

const html = `
<!DOCTYPE html>
<html>
    <head>
        <title>Example HTTP API</title>
        <style>
            html, body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                overflow: hidden;
            }

            body {
                padding-left: 12px;
                padding-right: 12px;
                background: #e2e2e2;
            }

            pre {
                margin-left: auto;
                margin-right: auto;
                padding-top: 20px;
                padding-bottom: 40px;
                width: 100%;
                max-width: 1000px;
                white-space: break-space;
                font-family: Arial, sans-serif;
                font-size: 16px;
                color: #222222;
                overflow-x: auto;
            }
        </style>
    </head>
    <body>
        <pre>${readme}</pre>
    </body>
</html>
`;

const init = () => {
    useHTTP({
        path: "/",
        method: "GET",
    });
};

const handler = (request, reply) => {
    reply.type("text/html");
    reply.send(html);
};

module.exports = {
    init,
    handler,
};
