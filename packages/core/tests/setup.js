beforeEach(() => {
    const manager = require("../src/manager");

    manager.services = {
        installed: new Map(),
        waiting: new Map(),
    };

    manager.plugins = {
        installed: new Map(),
        waiting: new Map(),
    };

    manager.components = {
        installed: new Map(),
        waiting: new Map(),
    };
});
