interface ServiceConfig {
    is?: 'service';
    name: string | string[];

    [name: string]: any;
}

interface ServiceUnit {
    [key: string]: any;
}

declare function Service (config: ServiceConfig):
    <T extends ServiceConfig>(service: T) => void;

export default Service;

export {
    Service,
    ServiceUnit,
    ServiceConfig,
};
