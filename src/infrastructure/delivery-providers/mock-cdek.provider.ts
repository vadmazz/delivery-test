import {Address, Cart, DeliveryProvider, DeliveryProviderType, DeliveryOption} from "../../domain";

export class MockCdekProvider implements DeliveryProvider {
    private readonly pricePerKilogram = 100;

    public async retrieveOptions(cart: Cart, _: Address): Promise<DeliveryOption[]> {
        const totalPrice = cart.weight * this.pricePerKilogram;

        return [
            new DeliveryOption({
                totalPrice: totalPrice,
                providerType: this.type,
                id: 'some-guid',
                deliveryAt: new Date(),
            })
        ];
    }

    get type(): DeliveryProviderType {
        return DeliveryProviderType.Cdek
    }
}