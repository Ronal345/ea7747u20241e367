import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';
import { OutdoorCenter } from '../domain/model/outdoorCenter';

export interface OutdoorCenterResource extends BaseResource {
  id: number;
  name: string;
  activityType: string;
  capacity: number;
  latitude: number;
  longitude: number;
}

export interface OutdoorCenterResponse extends BaseResponse {
  outdoorCenter: OutdoorCenterResource[];
}
