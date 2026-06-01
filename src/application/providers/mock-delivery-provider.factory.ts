import {DeliveryProvider, DeliveryProviderFactory, DeliveryProviderType} from "../../domain";
import {type HttpProvider} from "../interfaces";
import {Inject, Injectable} from "@nestjs/common";
import {MockCdekProvider} from "./mock-cdek.provider";
import {MockBoxberryProvider} from "./mock-boxberry.provider";

@Injectable()
export class MockDeliveryProviderFactory implements DeliveryProviderFactory {
    constructor(
        @Inject() private readonly httpProvider: HttpProvider
    ) {
    }

    public create(type: DeliveryProviderType): DeliveryProvider {
        switch (type) {
            case DeliveryProviderType.Cdek:
                return new MockCdekProvider(this.httpProvider);// Инжектить если не хотим transient
            case DeliveryProviderType.Boxberry:
                return new MockBoxberryProvider(this.httpProvider);// Инжектить если не хотим transient
        }
    }
}