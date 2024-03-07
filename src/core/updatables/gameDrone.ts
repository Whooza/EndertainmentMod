import {
    Entity,
    Player,
    Vector,
    Vector3
} from "@minecraft/server";
import UpdatableBase from "core/models/bases/updatableBase";
import EtnConfig from "core/models/configs/etnConfig";
import MathHelper from "core/utilities/mathHelper";

export default class GameDrone extends UpdatableBase {

    private speed: number;
    private nextPos: Vector3;
    private drone: Entity | undefined;

    constructor(config: EtnConfig) {
        super(config, "GameDrone");
        this.speed = 15.33;
        this.nextPos = {
            x: 0,
            y: 0,
            z: 0
        }
    }

    public initialize(): void {

    }

    public spawn(player: Player): void {
        this.drone = player.dimension.spawnEntity("oneblock:drone2", this.nextPos);
        this.drone.nameTag = `Drone von ${player.name}`;
        this.drone.playAnimation("on");
    }

    public despawn(): void {
        this.drone?.remove();
    }

    protected updateLogic(delta: number): Promise<void> {
        // if (this.drone && this.drone.isValid()) {
        //     if (Vector.distance(this.drone.location, this.nextPos) <= 2) {
        //         // this.nextPos = MathHelper.getRandomVector(1, 32);
        //         this.nextPos = this.player.location;
        //     } else {
        //         this.drone.teleport(MathHelper.lerpVector(this.drone.location, this.nextPos, delta * this.speed), {
        //             checkForBlocks: false,
        //             facingLocation: this.nextPos
        //         });
        //     }
        // }
        return Promise.resolve();
    }
}
