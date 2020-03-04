import { NOTIFY_TOKEN } from "../configs/line-notify-config";
import Axios from "axios";

export function LineNotify (stickerInfo: StickerInfo = <StickerInfo>{}) {
  return function (target, name) {
    target[name] = function (message: string) {
      const { stickerPackageId, stickerId } = stickerInfo;
      const options = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NOTIFY_TOKEN}`,
          'Content-Type': 'application/json'
        },
        params: { message, stickerPackageId, stickerId },
        url: 'https://notify-api.line.me/api/notify',
      };
      return Axios(options)
        .then(res => res.data)
        .catch(error => error.response.data);
    }
  }
}

export type LineNotifyAction = (message: string) => Promise<LineNotifyApiRes>

interface StickerInfo {
  stickerPackageId: number;
  stickerId: number;
}

export interface LineNotifyApiRes {
  status: number;
  msessage: string;
}
