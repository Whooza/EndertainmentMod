import IModule from "core/interfaces/iModule";
import EtnConfig from "../configs/etnConfig";

export default abstract class ModuleBase implements IModule {

    protected readonly config: EtnConfig;

    constructor(config: EtnConfig, name: string) {
        this.config = config;
        console.log(`Module '${name}' loaded`);
    }

    public abstract initialize(): void;
}