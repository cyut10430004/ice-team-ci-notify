import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { NOTIFY_TOKEN } from '../configs/line-notify-config';

@Injectable()
export class BaseLineNotifyService {
  send(message) {
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTIFY_TOKEN}`,
        'Content-Type': 'application/json'
      },
      params: { message },
      url: 'https://notify-api.line.me/api/notify',
    };
    return Axios(options);
  }
}