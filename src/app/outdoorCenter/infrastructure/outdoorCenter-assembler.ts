import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { OutdoorCenter } from '../domain/model/outdoorCenter';
import { OutdoorCenterResource, OutdoorCenterResponse } from './outdoorCenter-response';

export class OutdoorCenterAssembler implements BaseAssembler<
  OutdoorCenter,
  OutdoorCenterResource,
  OutdoorCenterResponse
> {
  toEntitiesFromResponse = (response: OutdoorCenterResponse): OutdoorCenter[] =>
    response.outdoorCenter.map((resource) => this.toEntityFromResource(resource as OutdoorCenterResource));
}
toEntityFromResource = (resource: OutdoorCenterResource): OutdoorCenter =>
  new OutdoorCenter({
    id: resource.id,
    name: resource.name,
    activityType: resource.activityType,
    capacity: resource.capacity,
    latitude: resource.latitude,
    longitude: resource.longitude,
  });

toResourceFromEntity = (entity: OutdoorCenter): OutdoorCenterResource =>
  ({
    id: entity.id,
    name: entity.name,
  }) as OutdoorCenterResource;
