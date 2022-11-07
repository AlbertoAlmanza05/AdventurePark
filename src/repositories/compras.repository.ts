import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MogodbDataSource} from '../datasources';
import {Compras, ComprasRelations} from '../models';

export class ComprasRepository extends DefaultCrudRepository<
  Compras,
  typeof Compras.prototype.id,
  ComprasRelations
> {
  constructor(
    @inject('datasources.mogodb') dataSource: MogodbDataSource,
  ) {
    super(Compras, dataSource);
  }
}
