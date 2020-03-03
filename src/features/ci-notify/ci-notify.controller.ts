import { Controller, Post, Body } from '@nestjs/common';
import { BaseLineNotifyService } from 'src/core/services/base-line-notify-service';

@Controller('ci-notify')
export class CiNotifyController {

  constructor(
    private readonly baseLineNotifyService: BaseLineNotifyService
  ) {}

  @Post('buildError')
  buildError(@Body() req): string {
    const { title, message } = req;
    this.baseLineNotifyService.send(`${title}\n${message}`);
    return 'test';
  }
}
