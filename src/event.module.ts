import { Module } from '@nestjs/common';
import { EvnetController } from './event/event.controller';
import { EvnetService } from './event/service/event.service';

@Module({
  imports: [],
  controllers: [EvnetController],
  providers: [EvnetService],
})
export class EvnetModule {}
