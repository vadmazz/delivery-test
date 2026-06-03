import {DeliveryOptionDto} from "./delivery-option.dto";

export class GetDeliveryResponse {
 options: DeliveryOptionDto[];

 constructor(options: DeliveryOptionDto[]) {
     this.options = options;
 }
}