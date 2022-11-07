import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MogodbDataSource} from '../datasources';
import {UsuarioRegistrado, UsuarioRegistradoRelations, Persona} from '../models';
import {PersonaRepository} from './persona.repository';

export class UsuarioRegistradoRepository extends DefaultCrudRepository<
  UsuarioRegistrado,
  typeof UsuarioRegistrado.prototype.id,
  UsuarioRegistradoRelations
> {

  public readonly persona: BelongsToAccessor<Persona, typeof UsuarioRegistrado.prototype.id>;

  constructor(
    @inject('datasources.mogodb') dataSource: MogodbDataSource, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>,
  ) {
    super(UsuarioRegistrado, dataSource);
    this.persona = this.createBelongsToAccessorFor('persona', personaRepositoryGetter,);
    this.registerInclusionResolver('persona', this.persona.inclusionResolver);
  }
}
