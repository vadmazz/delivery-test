import {Inject, Injectable} from "@nestjs/common";
import {Address, Cart, DeliveryOption, DeliveryProviderFactory, DeliveryProviderType} from "../../domain";

@Injectable()
export class DeliveryOptionsService {
    private readonly _availableDeliveryProviders: Set<DeliveryProviderType> = new Set(
        [DeliveryProviderType.Boxberry, DeliveryProviderType.Cdek]
    );

    constructor(
        @Inject(DeliveryProviderFactory) private readonly deliveryProviderFactory: DeliveryProviderFactory,
    ) {
    }

    public async getDeliveryOptions(cart: Cart, address: Address): Promise<DeliveryOption[]> {
        const results = await Promise.allSettled(
            Array.from(this._availableDeliveryProviders, providerType => {
                const provider = this.deliveryProviderFactory.create(providerType);

                return provider.retrieveOptions(cart, address);
            })
        );

        return results
            .filter(result => result.status === 'fulfilled')
            .flatMap(result => result.value);
    }
}