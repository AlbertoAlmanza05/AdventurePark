import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MogodbDataSource} from '../datasources';
import {Ciudad, CiudadRelations} from '../models';

export class CiudadRepository extends DefaultCrudRepository<
  Ciudad,
  typeof Ciudad.prototype.id,
  CiudadRelations
> {
  constructor(
    @inject('datasources.mogodb') dataSource: MogodbDataSource,
  ) {
    super(Ciudad, dataSource);
  }
}
