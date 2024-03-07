import {
    Vector2,
    Vector3
} from "@minecraft/server";

export default class MathHelper {

    public static lerpVector(vectorOne: Vector3, vectorTwo: Vector3, value: number): Vector3 {
        return {
            x: vectorOne.x + (vectorTwo.x - vectorOne.x) * value,
            y: vectorOne.y + (vectorTwo.y - vectorOne.y) * value,
            z: vectorOne.z + (vectorTwo.z - vectorOne.z) * value
        };
    }

    public static getRandomSpawnVector(playerCount: number): Vector3 {
        const multiplier = 16 * playerCount + 32;
        return {
            x: Math.random() * multiplier,
            y: 0,
            z: Math.random() * multiplier
        };
    }

    public static getRandomVector(min: number, max: number): Vector3 {
        return {
            x: this.getRandomNumber(min, max),
            y: this.getRandomNumber(min, max),
            z: this.getRandomNumber(min, max)
        };
    }

    public static getRandomNumber(min: number, max: number): number {
        return min + (Math.random() * (max - min));
    }

    public static calculateRotation(vectorA: Vector2, vectorB: Vector2): Vector2 {
        const radians = Math.atan2(vectorB.y, vectorB.x) - Math.atan2(vectorA.y, vectorA.x);
        let degrees = (radians * 180) / Math.PI;
        if (degrees < 0) {
            degrees += 360;
        }
        return { x: degrees, y: degrees };
    }

}
