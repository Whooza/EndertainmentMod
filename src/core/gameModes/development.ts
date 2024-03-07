import GameModeBase from "../models/bases/gameModeBase";
import EtnConfig from "core/models/configs/etnConfig";
import Interactions from "../modules/interactions";
import GlobalChat from "../modules/globalChat";
import NameTags from "../updatables/nameTags";
import AdminMenu from "../modules/adminMenu";
import Inventory from "../modules/inventory";

export default class Development extends GameModeBase {

    constructor(config: EtnConfig) {
        super(config, "Development");
    }

    public initialize(): void {
        this.modules.push(new AdminMenu(this.config));
        this.modules.push(new Inventory(this.config));
        this.modules.push(new GlobalChat(this.config));
        this.modules.push(new Interactions(this.config));
        this.modules.forEach(x => x.initialize());

        this.updatables.push(new NameTags(this.config));
        this.updatables.forEach(x => x.initialize());
    }

    protected updateLogic(delta: number): Promise<void> {
        return Promise.resolve();
    }
}
