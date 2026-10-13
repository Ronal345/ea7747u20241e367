import { BaseResponse } from '../../shared/infrastructure/base-response';
import { OutdoorCenter } from '../domain/model/outdoorCenter';


export interface ReservationResource extends BaseResponse {
  id: number;
  outdoorCenterId: OutdoorCenter;
  activityType: string;
  participantName: string;
  participants: string;
  weatherTemperature: string;
  reservedAt: string;
}
export interface ReservationResponse extends BaseResponse {
  reservations: ReservationResource[];
}
