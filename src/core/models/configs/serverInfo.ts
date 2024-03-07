export default class ServerInfo {

    public readonly address: string;
    public readonly port: string;

    constructor(address: string, port: string) {
        this.address = address;
        this.port = port;
    }
}
