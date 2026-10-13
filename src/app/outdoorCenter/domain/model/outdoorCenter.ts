import { BaseEntity } from '../../../shared/domain/model/base-entity';

export class OutdoorCenter implements BaseEntity{


  #id: number;
  constructor(props:{id:number},

    name: string,
    activityType:string,
    capacity:number,
    latitude:number,
    longitude:number,
  ) {
    this.#id = props.id;
  }
}
