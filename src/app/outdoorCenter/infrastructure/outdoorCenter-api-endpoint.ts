import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { OutdoorCenter } from '../domain/model/outdoorCenter';
import { OutdoorCenterResource, OutdoorCenterResponse } from './outdoorCenter-response';
import { OutdoorCenterAssembler } from './outdoorCenter-assembler';

export class OutdoorCenterApiEndpoint extends BaseApiEndpoint<OutdoorCenter,OutdoorCenterResource,OutdoorCenterResponse, OutdoorCenterAssembler>{
  constructor (http : HttpClient) {
    super(http, `${environment.platformProviderApiBaseUrl}${environment.platformProviderOutdoorCentersEndpointPath}`, new OutdoorCenterAssembler());
  }
}
