export default class ChatMessage {

    public sender: string;
    public server: string;
    public message: string;

    constructor(sender: string, server: string, message: string) {
        this.sender = sender;
        this.server = server;
        this.message = message;
    }
}
