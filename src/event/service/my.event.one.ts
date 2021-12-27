import { RpcException } from '@nestjs/microservices';
import { Context } from 'aws-lambda';

export const myEventOne = async (
  data: CustomEventBridgeEvent,
  ctx: Context,
) => {
  console.log(typeof ctx.plugin);
  return 'I AM TRIGERD!!';
};
