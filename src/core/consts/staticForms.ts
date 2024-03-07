import { ActionFormData, MessageFormData, ModalFormData } from "@minecraft/server-ui";

export default class StaticForms {

    private static readonly defaultText: string = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

    public static readonly transfer: ActionFormData = new ActionFormData()
        .title("Server wechseln")
        .body("auf einen anderen Server")
        .button("Lobby")
        .button("OneBlock")
        .button("CityBuild")
        .button("FreeBuild")
        .button("Farming");

    public static readonly welcome: ActionFormData = new ActionFormData()
        .title("OneBlock Multiplayer")
        .body(this.defaultText)
        .button("Okay");

    public static readonly startPoints: ActionFormData = new ActionFormData()
        .title("Bonus beim Einloggen")
        .body("Glückwunsch! Du hast 2 Punkte und 10 Coins bekommen.")
        .button("Cool, danke!");

    public static readonly newGame: MessageFormData = new MessageFormData()
        .title("Neues Spiel starten")
        .body("Möchtest Du wirklich eine neues Spiel starten?")
        .button1("Ja")
        .button2("Nein");

    public static readonly testModal: ModalFormData = new ModalFormData()
        .title("Test")
        .slider("slider", 1, 10, 1, 1)
        .dropdown("dropdown", ["Option 1", "Option 2", "Option 3"], 0)
        .textField("textfield", "Textfield")
        .toggle("toggle", true);
}
