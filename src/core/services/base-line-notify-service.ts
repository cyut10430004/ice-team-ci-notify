import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { NOTIFY_TOKEN } from '../configs/line-notify-config';

@Injectable()
export class BaseLineNotifyService {
  sendMessage(message) {
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTIFY_TOKEN}`,
        'Content-Type': 'application/json'
      },
      params: { message },
      url: 'https://notify-api.line.me/api/notify',
    };
    return Axios(options).then(res => console.log(res)).catch(res => console.log(res));
  }

  sendSuccessStickerMessage(message) {
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTIFY_TOKEN}`,
        'Content-Type': 'application/json'
      },
      params: {
         message,
         stickerPackageId: 1,
         stickerId: 5
      },
      url: 'https://notify-api.line.me/api/notify',
    };
    return Axios(options);
  }

  sendErrorStickerMessage(message) {
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTIFY_TOKEN}`,
        'Content-Type': 'application/json'
      },
      params: {
        message,
        stickerPackageId: 2,
        stickerId: 524
      },
      url: 'https://notify-api.line.me/api/notify',
    };
    return Axios(options);
  }
}