const useEvent = (util) => (event, callback) => {
    const { useInstallEffect, useEmitter, withHooks } = util;

    const emitter = useEmitter();
    const wrappedCallback = withHooks(callback);

    let isUnsubscribed = false;

    const unsubscribe = () => {
        isUnsubscribed = true;
        emitter.off(event, wrappedCallback);
    };

    useInstallEffect(() => {
        if (isUnsubscribed) {
            return;
        }

        emitter.on(event, wrappedCallback);

        return unsubscribe;
    });

    return unsubscribe;
};

module.exports = useEvent;
