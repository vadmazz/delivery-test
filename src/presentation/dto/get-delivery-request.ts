import {CartDto} from "./cart.dto";
import {AddressDto} from "./address.dto";

export class GetDeliveryRequest {
    cart!: CartDto;
    address!: AddressDto;
}