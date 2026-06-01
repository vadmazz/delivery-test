import {DeliveryOption} from "../../domain";

export class DeliveryOptionDto {
    id: string;
    providerType: string;
    price: number;
    deliveryAt: Date;

    constructor(option: DeliveryOption) {

    }
}