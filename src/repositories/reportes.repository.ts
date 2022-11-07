import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MogodbDataSource} from '../datasources';
import {Reportes, ReportesRelations} from '../models';

export class ReportesRepository extends DefaultCrudRepository<
  Reportes,
  typeof Reportes.prototype.id,
  ReportesRelations
> {
  constructor(
    @inject('datasources.mogodb') dataSource: MogodbDataSource,
  ) {
    super(Reportes, dataSource);
  }
}
