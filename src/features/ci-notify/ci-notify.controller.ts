import { Controller, Post, Body } from '@nestjs/common';
import { BaseLineNotifyService } from 'src/core/services/base-line-notify-service';
import { CiNotifyService, BuildInfo } from './ci-notify.service';

@Controller('ci-notify')
export class CiNotifyController {

  constructor(
    private readonly ciNotifyService: CiNotifyService,
    private readonly baseLineNotifyService: BaseLineNotifyService
  ) {}

  @Post('buildError')
  buildError(@Body() req: BuildInfo): string {
    const message = this.ciNotifyService.generateBuildErrorMessage(req);
    this.baseLineNotifyService.sendErrorStickerMessage(message);
    return 'Notify success';
  }

  @Post('buildSuccess')
  buildSuccess(@Body() req: BuildInfo): string {
    const message = this.ciNotifyService.generateBuildErrorMessage(req);
    this.baseLineNotifyService.sendSuccessStickerMessage(message);
    return 'Notify success';
  }
}
