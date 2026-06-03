import {MockBoxberryProvider} from "./mock-boxberry.provider";
import {DeliveryProviderType} from "../../domain";

describe("MockBoxberryProvider", () => {
    let provider: MockBoxberryProvider;

    beforeEach(() => {
        provider = new MockBoxberryProvider();
    });

    const mockCart = {} as any;

    const createAddress = (city: string) => ({
        city,
    }) as any;

    it("should return delivery option for Moscow", async () => {
        const address = createAddress("Moscow");

        const result = await provider.retrieveOptions(mockCart, address);

        expect(result[0].totalPrice).toBe(300);
    });

    it("should return delivery option for Kazan", async () => {
        const address = createAddress("Kazan");

        const result = await provider.retrieveOptions(mockCart, address);

        expect(result[0].totalPrice).toBe(500);
    });

    it("should throw error for unknown city", async () => {
        const address = createAddress("Berlin");

        await expect(provider.retrieveOptions(mockCart, address))
            .rejects
            .toThrow("Unknown city: Berlin");
    });

    it("should return correct provider type", () => {
        expect(provider.type).toBe(DeliveryProviderType.Boxberry);
    });
});