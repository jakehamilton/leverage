const { useConfig, useKeyRef } = require("@leverage/core");

const init = () => {
    useConfig({
        is: "service",
        type: "db",
    });

    // For this example, state is managed inside the plugin instance.
    // In an actual application, this service would likely call out to
    //  an actual database.
    useKeyRef("data", {
        users: [],
    });
};

const findUser = (name) => {
    const { current: data } = useKeyRef("data");

    const user = data.users.find((user) => user.name === name);

    return user;
};

const createUser = (user) => {
    const { current: data } = useKeyRef("data");

    data.users.push(user);
};

module.exports = {
    init,
    findUser,
    createUser,
};
