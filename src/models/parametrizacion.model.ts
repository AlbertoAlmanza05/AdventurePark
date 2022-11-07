import {Entity, model, property} from '@loopback/repository';

@model()
export class Parametrizacion extends Entity {
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
  compras: string;

  @property({
    type: 'string',
    required: true,
  })
  ventas: string;

  @property({
    type: 'string',
    required: true,
  })
  reportes: string;

  @property({
    type: 'string',
    required: true,
  })
  persona: string;

  @property({
    type: 'string',
    required: true,
  })
  seguridad: string;


  constructor(data?: Partial<Parametrizacion>) {
    super(data);
  }
}

export interface ParametrizacionRelations {
  // describe navigational properties here
}

export type ParametrizacionWithRelations = Parametrizacion & ParametrizacionRelations;
