import {Entity, model, property} from '@loopback/repository';

@model()
export class Registrarse extends Entity {
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
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;


  constructor(data?: Partial<Registrarse>) {
    super(data);
  }
}

export interface RegistrarseRelations {
  // describe navigational properties here
}

export type RegistrarseWithRelations = Registrarse & RegistrarseRelations;
