import {Entity, model, property} from '@loopback/repository';

@model()
export class Reportes extends Entity {
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
  reporteVenta: string;

  @property({
    type: 'string',
    required: true,
  })
  reporteCompra: string;

  @property({
    type: 'string',
    required: true,
  })
  reporteActividad: string;

  @property({
    type: 'string',
    required: true,
  })
  busquedaAvanzada: string;


  constructor(data?: Partial<Reportes>) {
    super(data);
  }
}

export interface ReportesRelations {
  // describe navigational properties here
}

export type ReportesWithRelations = Reportes & ReportesRelations;
