import { Module } from '@nestjs/common';
import { BaseLineNotifyService } from './services/base-line-notify-service';

@Module({
  controllers: [],
  providers: [BaseLineNotifyService],
  exports: [BaseLineNotifyService]
})
export class CoreModule {}
