import { Module } from '@nestjs/common';
import { DeliveryController } from './presentation';
import {DeliveryOptionsService} from "./application";
import {MockDeliveryProviderFactory} from "./infrastructure";
import {DeliveryProviderFactory} from "./domain";

@Module({
  imports: [],
  controllers: [DeliveryController],
  providers: [DeliveryOptionsService, {
      provide: DeliveryProviderFactory,
      useClass: MockDeliveryProviderFactory
  }],
})
export class AppModule {}
