import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiNotifyModule } from './features/ci-notify/ci-notify.module';

@Module({
  imports: [CiNotifyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
