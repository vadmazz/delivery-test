import {DeliveryOptionDto} from "./DeliveryOption.dto";

export class GetDeliveryResponse {
 options: DeliveryOptionDto[];

 constructor(options: DeliveryOptionDto[]) {
     this.options = options;
 }
}