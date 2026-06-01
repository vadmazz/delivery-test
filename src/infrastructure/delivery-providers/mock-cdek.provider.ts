import {Address, Cart, DeliveryProvider, DeliveryProviderType, DeliveryOption} from "../../domain";
import {HttpProvider} from "../../application";

export class MockCdekProvider implements DeliveryProvider {
    constructor(private readonly httpProvider: HttpProvider) {// from DI
    }

    public async retrieveOptions(cart: Cart, address: Address): Promise<DeliveryOption[]> {
        const response = await this.httpProvider.get("cdek.ru");

        return response.map(r => {
            new DeliveryOption({
                updatedAt: r.updatedAt,
                id: r.id,
                createdAt: r.createdAt,
                providerType: r.providerType,
                totalPrice: r.totalPrice,
                deliveryAt: r.deliveryAt,
            })
        })
    }

    get type(): DeliveryProviderType {
        return DeliveryProviderType.Boxberry
    }
}