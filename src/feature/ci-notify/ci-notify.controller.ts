import { Controller, Post, Body, Headers } from '@nestjs/common';
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
  async buildError(@Body() req: BuildInfo, @Headers() { token }): Promise<LineNotifyApiRes> {
    const message = this.ciNotifyService.generateBuildErrorMessage(req);
    const res = await this.baseLineNotifyService.sendErrorStickerMessage(message, token);
    return res;
  }

  @Post('buildSuccess')
  async buildSuccess(@Body() req: BuildInfo, @Headers() { token }): Promise<LineNotifyApiRes> {
    const message = this.ciNotifyService.generateBuildSuccessMessage(req);
    const res = await this.baseLineNotifyService.sendSuccessStickerMessage(message, token);
    return res;
  }

  @Post('send')
  async send(@Body() { message }, @Headers() { token }): Promise<LineNotifyApiRes> {
    const res = await this.baseLineNotifyService.sendMessage(message, token);
    return res;
  }
}
