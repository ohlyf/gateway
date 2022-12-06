import { Controller, Get, Post, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Version('1')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/')
  @Version('2')
  addHello(ctx) {
    return this.appService.addHello(ctx);
  }
}
