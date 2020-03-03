import { Module } from '@nestjs/common';
import { CiNotifyController } from './ci-notify.controller';
import { CiNotifyService } from './ci-notify.service';
import { CoreModule } from 'src/core/core.module';

@Module({
  imports: [CoreModule],
  controllers: [CiNotifyController],
  providers: [CiNotifyService]
})
export class CiNotifyModule {}
