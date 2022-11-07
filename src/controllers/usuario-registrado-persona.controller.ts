import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  UsuarioRegistrado,
  Persona,
} from '../models';
import {UsuarioRegistradoRepository} from '../repositories';

export class UsuarioRegistradoPersonaController {
  constructor(
    @repository(UsuarioRegistradoRepository)
    public usuarioRegistradoRepository: UsuarioRegistradoRepository,
  ) { }

  @get('/usuario-registrados/{id}/persona', {
    responses: {
      '200': {
        description: 'Persona belonging to UsuarioRegistrado',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Persona)},
          },
        },
      },
    },
  })
  async getPersona(
    @param.path.string('id') id: typeof UsuarioRegistrado.prototype.id,
  ): Promise<Persona> {
    return this.usuarioRegistradoRepository.persona(id);
  }
}
