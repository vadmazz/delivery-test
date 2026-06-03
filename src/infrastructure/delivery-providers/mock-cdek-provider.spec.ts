import {MockCdekProvider} from "./mock-cdek.provider";
import {DeliveryProviderType} from "../../domain";

describe("MockCdekProvider", () => {
    let provider: MockCdekProvider;

    beforeEach(() => {
        provider = new MockCdekProvider();
    });

    const createCart = (weight: number) => ({
        weight,
    }) as any;

    const mockAddress = {} as any;

    it("should calculate delivery price based on cart weight", async () => {
        const cart = createCart(2); // 2kg

        const result = await provider.retrieveOptions(cart, mockAddress);

        expect(result[0].totalPrice).toBe(200); //2 * 100
    });

    it("should calculate zero price for zero weight", async () => {
        const cart = createCart(0);

        const result = await provider.retrieveOptions(cart, mockAddress);

        expect(result[0].totalPrice).toBe(0);
    });

    it("should calculate correctly for fractional weight", async () => {
        const cart = createCart(1.5);

        const result = await provider.retrieveOptions(cart, mockAddress);

        expect(result[0].totalPrice).toBe(150);
    });

    it("should return correct provider type", () => {
        expect(provider.type).toBe(DeliveryProviderType.Cdek);
    });
});