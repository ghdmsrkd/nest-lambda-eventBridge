import { NestFactory } from '@nestjs/core';
import { EvnetModule } from '../../event.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import CustomStrategy from '../../common/nest/customTransport';
import { Context } from 'aws-lambda';
import { ExceptionFilter } from './rpc-exception.filter';

export async function bootstrap(
  event: CustomEventBridgeEvent,
  context: Context,
) {
  const customStrategy = new CustomStrategy(event, context);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EvnetModule,
    { strategy: customStrategy },
  );
  app.useGlobalFilters(new ExceptionFilter());
  app.listen(() => {});
}
