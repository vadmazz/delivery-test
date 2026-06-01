import { MockBoxberryProvider } from "./mock-boxberry.provider";
import { DeliveryProviderType } from "../../domain";

describe("MockBoxberryProvider", () => {
    const httpProvider = {
        get: jest.fn(),
    };

    const provider = new MockBoxberryProvider(httpProvider as any);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should call Boxberry endpoint", async () => {
        httpProvider.get.mockResolvedValue([]);

        await provider.retrieveOptions({} as any, {} as any);

        expect(httpProvider.get).toHaveBeenCalledTimes(1);
        expect(httpProvider.get).toHaveBeenCalledWith("boxberry.ru");
    });

    it("should map response to DeliveryOption", async () => {
        const dto = {
            id: "1",
            totalPrice: 500,
            providerType: DeliveryProviderType.Boxberry,
            createdAt: new Date(),
            updatedAt: new Date(),
            deliveryAt: new Date(),
        };

        httpProvider.get.mockResolvedValue([dto]);

        const result = await provider.retrieveOptions(
            {} as any,
            {} as any,
        );

        expect(result).toHaveLength(1);

        expect(result[0]).toMatchObject({
            id: dto.id,
            totalPrice: dto.totalPrice,
            providerType: dto.providerType,
        });
    });

    it("should expose Boxberry type", () => {
        expect(provider.type).toBe(
            DeliveryProviderType.Boxberry,
        );
    });
});