import {DeliveryOption} from "../../domain";

export class DeliveryOptionDto {
    id: string;
    providerType: string;
    totalPrice: number;
    deliveryAt: Date;

    constructor(option: DeliveryOption) {
        this.id = option.id;
       this.providerType = option.providerType
       this.totalPrice = option.totalPrice
       this.deliveryAt = option.deliveryAt
    }
}