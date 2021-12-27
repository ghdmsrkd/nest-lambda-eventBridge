import { Context } from 'aws-lambda';
import { bootstrap } from './common/nest';

module.exports.run = async (
  event: CustomEventBridgeEvent,
  context: Context,
) => {
  bootstrap(event, context);
};
