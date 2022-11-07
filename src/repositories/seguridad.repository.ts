import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MogodbDataSource} from '../datasources';
import {Seguridad, SeguridadRelations} from '../models';

export class SeguridadRepository extends DefaultCrudRepository<
  Seguridad,
  typeof Seguridad.prototype.id,
  SeguridadRelations
> {
  constructor(
    @inject('datasources.mogodb') dataSource: MogodbDataSource,
  ) {
    super(Seguridad, dataSource);
  }
}
