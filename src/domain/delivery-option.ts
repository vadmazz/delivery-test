import {Identifiable} from "./common";
import {DeliveryProviderType} from "./delivery-provider-type.enum";

export interface DeliveryOptionProps {
    id: string;
    providerType: DeliveryProviderType;
    totalPrice: number;
    deliveryAt: Date;
}

export class DeliveryOption extends Identifiable {
    private readonly _providerType: DeliveryProviderType;
    private readonly _totalPrice: number;
    private readonly _deliveryAt: Date;

    constructor(props: DeliveryOptionProps) {
        super(props.id);

        this._providerType = props.providerType;
        this._totalPrice = props.totalPrice;
        this._deliveryAt = props.deliveryAt;
    }

    get providerType(): DeliveryProviderType {
        return this._providerType;
    }

    get totalPrice(): number {
        return this._totalPrice;
    }

    get deliveryAt(): Date {
        return this._deliveryAt;
    }
}