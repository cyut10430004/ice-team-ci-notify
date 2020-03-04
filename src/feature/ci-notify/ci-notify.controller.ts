import { Controller, Post, Body } from '@nestjs/common';
import { BaseLineNotifyService } from 'src/core/services/base-line-notify-service';
import { CiNotifyService, BuildInfo } from './ci-notify.service';
import { LineNotifyApiRes } from 'src/core/decorators/line-notify-send';

@Controller('ci-notify')
export class CiNotifyController {

  constructor(
    private readonly ciNotifyService: CiNotifyService,
    private readonly baseLineNotifyService: BaseLineNotifyService
  ) {}

  @Post('buildError')
  async buildError(@Body() req: BuildInfo): Promise<LineNotifyApiRes> {
    const message = this.ciNotifyService.generateBuildErrorMessage(req);
    const res = await this.baseLineNotifyService.sendErrorStickerMessage(message);
    return res;
  }

  @Post('buildSuccess')
  async buildSuccess(@Body() req: BuildInfo): Promise<LineNotifyApiRes> {
    const message = this.ciNotifyService.generateBuildErrorMessage(req);
    const res = await this.baseLineNotifyService.sendSuccessStickerMessage(message);
    return res;
  }

  @Post('send')
  async send(@Body() { message }): Promise<LineNotifyApiRes> {
    const res = await this.baseLineNotifyService.sendMessage(message);
    return res;
  }
}
