import {Inject, Injectable} from "@nestjs/common";
import {Address, Cart, DeliveryOption, type DeliveryProviderFactory, DeliveryProviderType} from "../../domain";

@Injectable()
export class DeliveryOptionsService {
    private readonly _availableDeliveryProviders: Set<DeliveryProviderType> = new Set(
        [DeliveryProviderType.Boxberry, DeliveryProviderType.Cdek]
    );

    constructor(
        @Inject() private readonly deliveryProviderFactory: DeliveryProviderFactory,
    ) {
    }

    public async getDeliveryOptions(cart: Cart, address: Address): Promise<DeliveryOption[]> {
        let response: DeliveryOption[] = [];

        for (let availableDeliveryProvider of this._availableDeliveryProviders) {
            const provider = this.deliveryProviderFactory.create(availableDeliveryProvider);
            try {// Graceful degradation тут
                const options = await provider.retrieveOptions(cart, address);
                response = response.concat(options);
            } catch (error) {
                console.log(error);
            }
        }

        return response;
    }
}