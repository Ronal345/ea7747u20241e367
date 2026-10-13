import { OutdoorCenter } from './outdoorCenter';
import { BaseEntity } from '../../../shared/domain/model/base-entity';
import { BaseAssembler } from '../../../shared/infrastructure/base-assembler';

export class Reservation implements BaseEntity {


  #id:number;
  #outdoorCenterId: OutdoorCenter;
  #activityType:string;
  #participantName:string;
  #participants:string;
  #weatherTemperature: string;
  #reservedAt:string;
  constructor(reservation:{id:number; outdoorCenterId:OutdoorCenter;
  activityType:string; participantName:string; participants:string; weatherTemperature:string; reservedAt:string;}) {
    this.#id = reservation.id;
    this.#outdoorCenterId = reservation.outdoorCenterId;
    this.#activityType = reservation.activityType;
    this.#participantName = reservation.participantName;
    this.#participants = reservation.participants;
    this.#weatherTemperature = reservation.weatherTemperature;
    this.#reservedAt = reservation.reservedAt;
  }


  get id(): number {
    return this.#id;
  }

  set id(value: number) {
    this.#id = value;
  }

  get outdoorCenterId(): OutdoorCenter {
    return this.#outdoorCenterId;
  }

  set outdoorCenterId(value: OutdoorCenter) {
    this.#outdoorCenterId = value;
  }

  get activityType(): string {
    return this.#activityType;
  }

  set activityType(value: string) {
    this.#activityType = value;
  }

  get participantName(): string {
    return this.#participantName;
  }

  set participantName(value: string) {
    this.#participantName = value;
  }

  get participants(): string {
    return this.#participants;
  }

  set participants(value: string) {
    this.#participants = value;
  }

  get weatherTemperature(): string {
    return this.#weatherTemperature;
  }

  set weatherTemperature(value: string) {
    this.#weatherTemperature = value;
  }

  get reservedAt(): string {
    return this.#reservedAt;
  }

  set reservedAt(value: string) {
    this.#reservedAt = value;
  }
}
