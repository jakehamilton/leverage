interface ComponentConfig {
    is?: 'component';
    type: string | string[];

    [name: string]: any;
}

interface ComponentUnit {
    [key: string]: any;
}

declare function Component (ComponentConfig):
    <T extends ComponentUnit>(component: T) => void;

export default Component;

export {
    Component,
    ComponentUnit,
    ComponentConfig,
};
