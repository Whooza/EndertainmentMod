import GameModeBase from "../models/bases/gameModeBase";
import EtnConfig from "core/models/configs/etnConfig";
import Interactions from "core/modules/interactions";
import GlobalChat from "core/modules/globalChat";
import NameTags from "core/updatables/nameTags";
import AdminMenu from "core/modules/adminMenu";
import Inventory from "core/modules/inventory";

export default class CityBuild extends GameModeBase {

    constructor(config: EtnConfig) {
        super(config, "CityBuild");
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