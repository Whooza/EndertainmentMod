import { GamemodeType } from "core/enums/gamemodeType";
import ServerInfo from "./serverInfo";

export default class EtnConfig {

    public readonly serverName: string;
    public readonly isDevelopment: boolean;
    public readonly gamemodeType: GamemodeType;
    public readonly serverAddresses: Map<string, ServerInfo>;

    constructor(serverName: string, isDevelopment: boolean, gamemodeType: GamemodeType, serverAddresses: Map<string, ServerInfo>) {
        this.serverName = serverName;
        this.isDevelopment = isDevelopment;
        this.gamemodeType = gamemodeType;
        this.serverAddresses = serverAddresses;
    }
}
