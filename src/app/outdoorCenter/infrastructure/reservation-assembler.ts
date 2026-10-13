import { OutdoorCenterAssembler } from './outdoorCenter-assembler';
import { BaseResponse } from '../../shared/infrastructure/base-response';
import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { Reservation } from '../domain/model/reservation';
import { ReservationResource, ReservationResponse } from './reservation-response';
import { OutdoorCenter } from '../domain/model/outdoorCenter';


export class ReservationAssembler implements BaseAssembler<
  Reservation,
  ReservationResource,
  ReservationResponse
> {
  toEntitiesFromResponse = (response: ReservationResponse): Reservation[] => {
    console.log(response);
    return response.reservations.map((resource) =>
      this.toEntityFromResource(resource as ReservationResource),
    );
  };

  toEntityFromResource = (resource: ReservationResource): Reservation =>
    new Reservation({
      id: resource.id,
      outdoorCenterId: resource.outdoorCenterId,
      activityType: resource.activityType,
      participantName: resource.participantName,
      participants: resource.participants,
      weatherTemperature: resource.weatherTemperature,
      reservedAt: resource.reservedAt,
    });
  toResourceFromEntity = (entity: Reservation): ReservationResource =>
    ({
      id: entity.id,
      outdoorCenterId: entity.outdoorCenterId,
      activityType: entity.activityType,
      participantName: entity.participantName,
      participants: entity.participants,
      weatherTemperature: entity.weatherTemperature,
      reservedAt: entity.reservedAt,
    }) as ReservationResource;
}
