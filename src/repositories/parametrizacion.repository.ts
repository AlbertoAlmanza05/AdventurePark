import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MogodbDataSource} from '../datasources';
import {Parametrizacion, ParametrizacionRelations} from '../models';

export class ParametrizacionRepository extends DefaultCrudRepository<
  Parametrizacion,
  typeof Parametrizacion.prototype.id,
  ParametrizacionRelations
> {
  constructor(
    @inject('datasources.mogodb') dataSource: MogodbDataSource,
  ) {
    super(Parametrizacion, dataSource);
  }
}
