import {
  CustomTransportStrategy,
  RpcException,
  Server,
} from '@nestjs/microservices';
import { PrismaClient } from '@prisma/client';
import { Context } from 'aws-lambda';

export default class CustomStrategy
  extends Server
  implements CustomTransportStrategy
{
  event: CustomEventBridgeEvent;
  context: Context;
  constructor(event: CustomEventBridgeEvent, context: Context) {
    super();
    this.event = event;
    this.context = context;
    /* Activate it when you need plugin. */
    // this.setPulgin()
  }

  private setPulgin() {
    this.context.plugin = {
      prisma: new PrismaClient(),
    };
  }

  public async listen(callback: () => void) {
    const echoHandler = this.messageHandlers.get(this.event.action);
    if (!echoHandler) {
      throw new RpcException('This event is not registered.');
    }
    const res = await echoHandler(this.event, this.context);
    this.reponseMapper(res);
  }

  private reponseMapper(res) {
    // Collect the results on behalf of the interceptor.
    console.log(res);
  }

  public async close() {}
}
