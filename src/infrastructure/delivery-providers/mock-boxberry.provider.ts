import {Address, Cart, DeliveryProvider, DeliveryProviderType, DeliveryOption, City} from "../../domain";


export class MockBoxberryProvider implements DeliveryProvider {
    private readonly cityTariffs: Map<City, number> = new Map<City, number>([
        ['Moscow', 300],
        ['Kazan', 500],
    ]);

    public async retrieveOptions(_: Cart, address: Address): Promise<DeliveryOption[]> {
        const tariff = this.cityTariffs.get(address.city);

        if (tariff === undefined) {
            throw new Error(`Unknown city: ${address.city}`);
        }

        return [
            new DeliveryOption({
                id: 'some-id',
                providerType: this.type,
                deliveryAt: new Date(),
                totalPrice: tariff
            })
        ]
    }

    get type(): DeliveryProviderType {
        return DeliveryProviderType.Boxberry
    }
}