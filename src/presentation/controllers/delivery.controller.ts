import {Body, Controller, Get, Post} from '@nestjs/common';
import {DeliveryOptionDto, GetDeliveryRequest, GetDeliveryResponse} from "../dto";
import {DeliveryOptionsService} from "../../application";
import {Address, Cart, DeliveryOption} from "../../domain";

@Controller()
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryOptionsService) {}

  // swagger схему добавить и описание
  @Post("delivery-options")
  public async getDeliveryOptions(@Body() request: GetDeliveryRequest): Promise<GetDeliveryResponse> {
    const options = await this.deliveryService.getDeliveryOptions(new Cart(request.cart), new Address(request.address));

    return new GetDeliveryResponse(options.map(o => new DeliveryOptionDto(o)));
  }
}
