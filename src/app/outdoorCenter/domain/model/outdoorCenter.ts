import { BaseEntity } from '../../../shared/domain/model/base-entity';

export class OutdoorCenter implements BaseEntity {
  #id: number;
  #name: string;
  constructor(
    props: { id: number; name: string },

    name: string,
    activityType: string,
    capacity: number,
    latitude: number,
    longitude: number,
  ) {
    this.#id = props.id;
    this.#name = props.name;
  }
  get id(): number {
    return this.#id;
  }

  set id(value: number) {
    this.#id = value;
  }

  get name(): string {
    return this.#name;
  }

  set name(value: string) {
    this.#name = value;
  }
}
