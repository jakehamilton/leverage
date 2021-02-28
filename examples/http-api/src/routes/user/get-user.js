const { useDependencies, useService } = require("@leverage/core");
const { useHTTP } = require("@leverage/plugin-http");

/*
 * This route handles getting existing users. If you have `curl` installed,
 *  you can run the following to get an existing user:
 *
 * curl http://localhost:8080/user/my-name
 */

const init = () => {
    useHTTP({
        path: "/user/:name",
        method: "GET",
    });

    useDependencies({
        services: ["db"],
    });
};

const handler = (request, reply) => {
    const db = useService("db");

    const user = db.findUser(request.params.name);

    if (user) {
        reply.send(user);
    } else {
        reply.code(404);
        reply.send({
            message: `Could not find user "${request.params.name}".`,
        });
    }
};

module.exports = {
    init,
    handler,
};
