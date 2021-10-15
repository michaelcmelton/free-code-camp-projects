import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): object {
    return {
      message:
        "Valid paths are served at `/api/:timestamp`. the timestamp param should be formatted as a unix timecode or '2015-06-24'",
    };
  }
}
