import IUpdatable from "core/interfaces/iUpdatable";
import EtnConfig from "../configs/etnConfig";

export default abstract class UpdatableBase implements IUpdatable {

    protected readonly config: EtnConfig;

    constructor(config: EtnConfig, name: string) {
        this.config = config;
        console.log(`Updatable '${name}' loaded`);
    }

    public abstract initialize(): void;

    public async update(delta: number): Promise<void> {
        await this.updateLogic(delta);
    }

    protected abstract updateLogic(delta: number): Promise<void>;
}
