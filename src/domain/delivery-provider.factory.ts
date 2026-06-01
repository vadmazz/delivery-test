import {DeliveryProvider} from "./delivery-provider";
import {DeliveryProviderType} from "./delivery-provider-type.enum";

export interface DeliveryProviderFactory {
    create(type: DeliveryProviderType): DeliveryProvider;
}

export const DeliveryProviderFactory = Symbol.for("DeliveryProviderFactory");