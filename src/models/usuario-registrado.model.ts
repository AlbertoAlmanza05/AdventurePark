import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Persona} from './persona.model';

@model()
export class UsuarioRegistrado extends Entity {
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
  nombre: string;

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

  @belongsTo(() => Persona)
  personaId: string;

  constructor(data?: Partial<UsuarioRegistrado>) {
    super(data);
  }
}

export interface UsuarioRegistradoRelations {
  // describe navigational properties here
}

export type UsuarioRegistradoWithRelations = UsuarioRegistrado & UsuarioRegistradoRelations;
