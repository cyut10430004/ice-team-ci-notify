import { Controller, Post, Body } from '@nestjs/common';
import { BaseLineNotifyService } from 'src/core/services/base-line-notify-service';
import { CiNotifyService, BuildErrorInfo } from './ci-notify.service';

@Controller('ci-notify')
export class CiNotifyController {

  constructor(
    private readonly ciNotifyService: CiNotifyService,
    private readonly baseLineNotifyService: BaseLineNotifyService
  ) {}

  @Post('buildError')
  buildError(@Body() req: BuildErrorInfo): string {
    const message = this.ciNotifyService.generateBuildErrorMessage(req);
    this.baseLineNotifyService.sendErrorStickerMessage(message);
    return 'success';
  }

  @Post('buildSuccess')
  buildSuccess(@Body() req: BuildErrorInfo): string {
    const message = this.ciNotifyService.generateBuildErrorMessage(req);
    this.baseLineNotifyService.sendSuccessStickerMessage(message);
    return 'success';
  }
}
