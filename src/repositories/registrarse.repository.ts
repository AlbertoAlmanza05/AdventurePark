import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MogodbDataSource} from '../datasources';
import {Registrarse, RegistrarseRelations} from '../models';

export class RegistrarseRepository extends DefaultCrudRepository<
  Registrarse,
  typeof Registrarse.prototype.id,
  RegistrarseRelations
> {
  constructor(
    @inject('datasources.mogodb') dataSource: MogodbDataSource,
  ) {
    super(Registrarse, dataSource);
  }
}
