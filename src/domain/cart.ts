import {Identifiable} from "./common";

export interface CartProps {
    id: string;
    weight: number;
    size: number;
    amount: number;
}

export class Cart extends Identifiable {
    private readonly _weight: number;
    private readonly _size: number;
    private readonly _amount: number;

    constructor(props: CartProps) {
        super(props.id);

        this._weight = props.weight;
        this._size = props.size;
        this._amount = props.amount;
    }

    get weight(): number {
        return this._weight;
    }
    get size(): number {
        return this._size;
    }
    get amount(): number {
        return this._amount;
    }
}