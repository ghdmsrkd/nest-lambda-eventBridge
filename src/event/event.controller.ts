import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { EvnetService } from './service/event.service';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';
import { Context } from 'aws-lambda';

@Controller()
export class EvnetController {
  constructor(private readonly evnetService: EvnetService) {}

  @MessagePattern('MY.EVENT.ONE')
  async BTPExpiredEventHandler(
    @Payload() data: CustomEventBridgeEvent,
    @Ctx() ctx: Context,
  ) {
    return await this.evnetService.myEventOne(data, ctx);
  }
}
