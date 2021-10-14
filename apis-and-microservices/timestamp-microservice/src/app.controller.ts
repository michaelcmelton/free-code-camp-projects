import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/:unixTimeStamp")
  convertUnix(@Param("unixTimeStamp") timestamp: string) {
    const date = new Date(timestamp.includes("-") ? timestamp : +timestamp);
    return {
      unix: date.valueOf(),
      utc: date,
    };
  }
}
