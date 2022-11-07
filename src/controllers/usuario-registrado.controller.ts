import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {UsuarioRegistrado} from '../models';
import {UsuarioRegistradoRepository} from '../repositories';

export class UsuarioRegistradoController {
  constructor(
    @repository(UsuarioRegistradoRepository)
    public usuarioRegistradoRepository : UsuarioRegistradoRepository,
  ) {}

  @post('/usuario-registrados')
  @response(200, {
    description: 'UsuarioRegistrado model instance',
    content: {'application/json': {schema: getModelSchemaRef(UsuarioRegistrado)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioRegistrado, {
            title: 'NewUsuarioRegistrado',
            exclude: ['id'],
          }),
        },
      },
    })
    usuarioRegistrado: Omit<UsuarioRegistrado, 'id'>,
  ): Promise<UsuarioRegistrado> {
    return this.usuarioRegistradoRepository.create(usuarioRegistrado);
  }

  @get('/usuario-registrados/count')
  @response(200, {
    description: 'UsuarioRegistrado model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UsuarioRegistrado) where?: Where<UsuarioRegistrado>,
  ): Promise<Count> {
    return this.usuarioRegistradoRepository.count(where);
  }

  @get('/usuario-registrados')
  @response(200, {
    description: 'Array of UsuarioRegistrado model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UsuarioRegistrado, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UsuarioRegistrado) filter?: Filter<UsuarioRegistrado>,
  ): Promise<UsuarioRegistrado[]> {
    return this.usuarioRegistradoRepository.find(filter);
  }

  @patch('/usuario-registrados')
  @response(200, {
    description: 'UsuarioRegistrado PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioRegistrado, {partial: true}),
        },
      },
    })
    usuarioRegistrado: UsuarioRegistrado,
    @param.where(UsuarioRegistrado) where?: Where<UsuarioRegistrado>,
  ): Promise<Count> {
    return this.usuarioRegistradoRepository.updateAll(usuarioRegistrado, where);
  }

  @get('/usuario-registrados/{id}')
  @response(200, {
    description: 'UsuarioRegistrado model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UsuarioRegistrado, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UsuarioRegistrado, {exclude: 'where'}) filter?: FilterExcludingWhere<UsuarioRegistrado>
  ): Promise<UsuarioRegistrado> {
    return this.usuarioRegistradoRepository.findById(id, filter);
  }

  @patch('/usuario-registrados/{id}')
  @response(204, {
    description: 'UsuarioRegistrado PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioRegistrado, {partial: true}),
        },
      },
    })
    usuarioRegistrado: UsuarioRegistrado,
  ): Promise<void> {
    await this.usuarioRegistradoRepository.updateById(id, usuarioRegistrado);
  }

  @put('/usuario-registrados/{id}')
  @response(204, {
    description: 'UsuarioRegistrado PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuarioRegistrado: UsuarioRegistrado,
  ): Promise<void> {
    await this.usuarioRegistradoRepository.replaceById(id, usuarioRegistrado);
  }

  @del('/usuario-registrados/{id}')
  @response(204, {
    description: 'UsuarioRegistrado DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRegistradoRepository.deleteById(id);
  }
}
