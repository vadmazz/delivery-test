import {DeliveryProviderType} from "./delivery-provider-type.enum";
import {DeliveryOption} from "./delivery-option";
import {Cart} from "./cart";
import {Address} from "./address";

export interface DeliveryProvider {
    get type(): DeliveryProviderType;
    retrieveOptions(cart: Cart, address: Address): Promise<DeliveryOption[]>;
}