import { Injectable } from '@nestjs/common';
import { myEventOne } from './my.event.one';

@Injectable()
export class EvnetService {
  myEventOne = myEventOne;
}
