import { Injectable } from '@nestjs/common';
import { LineNotifyAction, LineNotify } from '../decorators/line-notify-send';

@Injectable()
export class BaseLineNotifyService {
  // 貼圖 stickerId 對照表
  // https://devdocs.line.me/files/sticker_list.pdf

  @LineNotify()
  sendMessage: LineNotifyAction;

  @LineNotify({
    stickerPackageId: 1,
    stickerId: 5
  })
  sendSuccessStickerMessage: LineNotifyAction;

  @LineNotify({
    stickerPackageId: 2,
    stickerId: 524
  })
  sendErrorStickerMessage: LineNotifyAction;
}