export default class TeleportInfo {

    public serverName: string;
    public playerName: string;
    public teleport: string;

    constructor(serverName: string, playerName: string, teleport: string) {
        this.serverName = serverName;
        this.playerName = playerName;
        this.teleport = teleport;
    }
}