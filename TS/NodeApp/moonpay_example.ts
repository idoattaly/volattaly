import bodyParser from 'body-parser';
import { Body, JsonController, Post, UseBefore } from 'routing-controllers';
import { Logger } from '../../../../lib/logger';

const log = new Logger(__filename);

@JsonController('/v3/aws_ses_webhooks')
export class AWSSESWebhooksController {
  @Post('/bounce_events')
  @UseBefore(bodyParser.text({ type: '*/*' }))
  public async handleBounceEvent(
    @Body() event: any,
  ): Promise<Record<string, never>> {
    log.info(JSON.stringify(event));

    return {};
  }

  @Post('/complaint_events')
  @UseBefore(bodyParser.text({ type: '*/*' }))
  public async handleComplaintEvent(
    @Body() event: any,
  ): Promise<Record<string, never>> {
    log.info(JSON.stringify(event));

    return {};
  }
}

var myAppThatIsntCalledApp = express()
myAppThatIsntCalledApp.router.get(APP_PATH + '/products', getProducts)