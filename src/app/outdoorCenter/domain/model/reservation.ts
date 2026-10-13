import { OutdoorCenter } from './outdoorCenter';

export class Reservation {


  constructor(
    id:string,
    outdoorCenterId: OutdoorCenter,
    activityType:string,
    participantName:string,
    participants:string,
    weatherTemperature: string,
    reservedAt:string,
  ) {}
}
