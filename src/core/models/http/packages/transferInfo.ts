export default class TransferInfo {

    public playerName: string;
    public fromServer: string;
    public toServer: string;
    public serverPort: string;

    constructor(playerName: string, fromServer: string, toServer: string, serverPort: string) {
        this.playerName = playerName;
        this.fromServer = fromServer;
        this.toServer = toServer;
        this.serverPort = serverPort;
    }
}