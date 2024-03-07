export default interface IUpdatable {

    initialize(): void;
    update(delta: number): Promise<void>;
}