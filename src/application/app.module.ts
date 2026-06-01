import { Module } from '@nestjs/common';
import { DeliveryController } from '../presentation';

@Module({
  imports: [],
  controllers: [DeliveryController],
  providers: [],
})
export class AppModule {}
