import {DeliveryProvider, DeliveryProviderFactory, DeliveryProviderType} from "../../domain";
import {Inject, Injectable} from "@nestjs/common";
import {MockCdekProvider} from "./mock-cdek.provider";
import {MockBoxberryProvider} from "./mock-boxberry.provider";

@Injectable()
export class MockDeliveryProviderFactory implements DeliveryProviderFactory {
    public create(type: DeliveryProviderType): DeliveryProvider {
        switch (type) {
            case DeliveryProviderType.Cdek:
                return new MockCdekProvider();
            case DeliveryProviderType.Boxberry:
                return new MockBoxberryProvider();
        }
    }
}