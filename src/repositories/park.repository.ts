import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MogodbDataSource} from '../datasources';
import {Park, ParkRelations, Persona} from '../models';
import {PersonaRepository} from './persona.repository';

export class ParkRepository extends DefaultCrudRepository<
  Park,
  typeof Park.prototype.id,
  ParkRelations
> {

  public readonly personas: HasManyRepositoryFactory<Persona, typeof Park.prototype.id>;

  constructor(
    @inject('datasources.mogodb') dataSource: MogodbDataSource, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>,
  ) {
    super(Park, dataSource);
    this.personas = this.createHasManyRepositoryFactoryFor('personas', personaRepositoryGetter,);
    this.registerInclusionResolver('personas', this.personas.inclusionResolver);
  }
}
