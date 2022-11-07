import {Entity, model, property} from '@loopback/repository';

@model()
export class Seguridad extends Entity {
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
  usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  rol: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoConfirmacion: string;


  constructor(data?: Partial<Seguridad>) {
    super(data);
  }
}

export interface SeguridadRelations {
  // describe navigational properties here
}

export type SeguridadWithRelations = Seguridad & SeguridadRelations;
