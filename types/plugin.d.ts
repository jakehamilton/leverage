interface PluginConfig {
    is?: 'plugin';
    type: string | string[];

    [name: string]: any;
}

interface PluginUnit {
    [key: string]: any;
}

declare function Plugin (config: PluginConfig):
    <T extends PluginUnit>(plugin: T) => void;

export default Plugin;

export {
    Plugin,
    PluginUnit,
    PluginConfig,
};
