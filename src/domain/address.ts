export interface AddressProps {
    x: number;
    y: number;
}

export class Address {
    private readonly _x: number;
    private readonly _y: number;

    constructor(props: AddressProps) {
        this._x = props.x;
        this._y = props.y;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }
}
