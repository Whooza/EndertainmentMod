import { GamemodeType } from "./enums/gamemodeType";
import EtnConfig from "./models/configs/etnConfig";
import Development from "./gameModes/development";
import IUpdatable from "./interfaces/iUpdatable";
import CityBuild from "./gameModes/cityBuild";
import FreeBuild from "./gameModes/freeBuild";
import OneBlock from "./gameModes/oneBlock";
import { system } from "@minecraft/server";
import Farming from "./gameModes/farming";
import Prison from "./gameModes/prison";
import Lobby from "./gameModes/lobby";

export default class EtnGame {

    private gamemode: IUpdatable;
    private lastUpdate: number;

    constructor(config: EtnConfig) {
        this.gamemode = this.getGameMode(config);
        this.lastUpdate = 0;
    }

    public initialize(): void {
        this.gamemode.initialize();
    }

    public update(): void {

        const dt = new Date().getMilliseconds();
        const delta = dt - this.lastUpdate;

        if (delta > 15) {
            this.lastUpdate = dt;
            system.run(async () => await this.gamemode.update(delta));
        }
    }

    private getGameMode(config: EtnConfig) {
        switch (config.gamemodeType) {
            case GamemodeType.Lobby:
                return new Lobby(config);
            case GamemodeType.Farming:
                return new Farming(config);
            case GamemodeType.Prison:
                return new Prison(config);
            case GamemodeType.CityBuild:
                return new CityBuild(config);
            case GamemodeType.FreeBuild:
                return new FreeBuild(config);
            case GamemodeType.OneBlock:
                return new OneBlock(config);
            case GamemodeType.Development:
                return new Development(config);
            default:
                throw new Error("gameModeType undefined");
        }
    }
}
