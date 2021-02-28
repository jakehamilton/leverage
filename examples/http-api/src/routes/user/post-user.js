const { useService, useDependencies } = require("@leverage/core");
const { useHTTP } = require("@leverage/plugin-http");

/*
 * This route handles creating new users. If you have `curl` installed,
 *  you can run the following to create a new user:
 *
 * curl -H "Content-Type: application/json" --request POST --data '{ "favoriteColor": "my-favorite-color" }' http://localhost:8080/user/my-name
 */

const init = () => {
    useHTTP({
        path: "/user/:name",
        method: "POST",
    });

    useDependencies({
        services: ["db"],
    });
};

const handler = (request, reply) => {
    const db = useService("db");

    if (db.findUser({ name: request.params.name })) {
        reply.code(409);
        reply.send({
            message: "User already exists.",
        });
    } else {
        db.createUser({
            name: request.params.name,
            favoriteColor: request.body.favoriteColor,
        });

        reply.send({
            message: "Created new user.",
        });
    }
};

module.exports = {
    init,
    handler,
};
