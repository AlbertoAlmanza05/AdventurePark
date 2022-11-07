import {Entity, model, property, hasMany} from '@loopback/repository';
import {Persona} from './persona.model';

@model()
export class Park extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreParque: string;

  @property({
    type: 'string',
    required: true,
  })
  codigoParque: string;

  @hasMany(() => Persona)
  personas: Persona[];

  constructor(data?: Partial<Park>) {
    super(data);
  }
}

export interface ParkRelations {
  // describe navigational properties here
}

export type ParkWithRelations = Park & ParkRelations;
