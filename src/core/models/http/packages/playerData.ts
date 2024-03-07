export default class PlayerData {

    public get name(): string {
        return this._name;
    }

    public get uid(): string {
        return this._uid;
    }

    public get rank(): number {
        return this._rank;
    }

    public get level(): number {
        return this._level;
    }
    public set level(v: number) {
        if (this._level != v) {
            this._level = v;
        }
    }

    public get coins(): number {
        return this._coins;
    }
    public set coins(v: number) {
        if (this._coins != v) {
            this._coins = v;
        }
    }

    public get points(): number {
        return this._points;
    }
    public set points(v: number) {
        if (this._points != v) {
            this._points = v;
        }
    }

    private _name: string;
    private _uid: string;
    private _rank: number;
    private _level: number;
    private _coins: number;
    private _points: number;

    constructor(name: string, uid: string, level: number, rank: number, points: number, coins: number) {
        this._name = name;
        this._uid = uid;
        this._rank = rank;
        this._level = level;
        this._coins = coins;
        this._points = points;
    }

}