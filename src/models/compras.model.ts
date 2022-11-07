import {Entity, model, property} from '@loopback/repository';

@model()
export class Compras extends Entity {
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
  CompraEntrada: string;

  @property({
    type: 'string',
    required: true,
  })
  ActividadRealizar: string;


  constructor(data?: Partial<Compras>) {
    super(data);
  }
}

export interface ComprasRelations {
  // describe navigational properties here
}

export type ComprasWithRelations = Compras & ComprasRelations;
