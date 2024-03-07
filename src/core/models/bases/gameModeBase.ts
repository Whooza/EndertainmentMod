import EtnConfig from "core/models/configs/etnConfig";
import IUpdatable from "core/interfaces/iUpdatable";
import IModule from "core/interfaces/iModule";

export default abstract class GameModeBase implements IUpdatable {

    protected readonly config: EtnConfig;
    protected readonly modules: IModule[];
    protected readonly updatables: IUpdatable[];

    constructor(config: EtnConfig, name: string) {
        this.config = config;
        this.modules = new Array<IModule>();
        this.updatables = new Array<IUpdatable>();
        console.log(`GameMode '${name}' loaded`);
    }

    public abstract initialize(): void;

    public async update(delta: number): Promise<void> {
        for (let x = 0; x < this.updatables.length; x++) {
            await this.updatables[x].update(delta);
        }
        await this.updateLogic(delta);
    }

    protected abstract updateLogic(delta: number): Promise<void>;
}
