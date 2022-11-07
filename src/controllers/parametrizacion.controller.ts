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
import {Parametrizacion} from '../models';
import {ParametrizacionRepository} from '../repositories';

export class ParametrizacionController {
  constructor(
    @repository(ParametrizacionRepository)
    public parametrizacionRepository : ParametrizacionRepository,
  ) {}

  @post('/parametrizacions')
  @response(200, {
    description: 'Parametrizacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Parametrizacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parametrizacion, {
            title: 'NewParametrizacion',
            exclude: ['id'],
          }),
        },
      },
    })
    parametrizacion: Omit<Parametrizacion, 'id'>,
  ): Promise<Parametrizacion> {
    return this.parametrizacionRepository.create(parametrizacion);
  }

  @get('/parametrizacions/count')
  @response(200, {
    description: 'Parametrizacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Parametrizacion) where?: Where<Parametrizacion>,
  ): Promise<Count> {
    return this.parametrizacionRepository.count(where);
  }

  @get('/parametrizacions')
  @response(200, {
    description: 'Array of Parametrizacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Parametrizacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Parametrizacion) filter?: Filter<Parametrizacion>,
  ): Promise<Parametrizacion[]> {
    return this.parametrizacionRepository.find(filter);
  }

  @patch('/parametrizacions')
  @response(200, {
    description: 'Parametrizacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parametrizacion, {partial: true}),
        },
      },
    })
    parametrizacion: Parametrizacion,
    @param.where(Parametrizacion) where?: Where<Parametrizacion>,
  ): Promise<Count> {
    return this.parametrizacionRepository.updateAll(parametrizacion, where);
  }

  @get('/parametrizacions/{id}')
  @response(200, {
    description: 'Parametrizacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Parametrizacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Parametrizacion, {exclude: 'where'}) filter?: FilterExcludingWhere<Parametrizacion>
  ): Promise<Parametrizacion> {
    return this.parametrizacionRepository.findById(id, filter);
  }

  @patch('/parametrizacions/{id}')
  @response(204, {
    description: 'Parametrizacion PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parametrizacion, {partial: true}),
        },
      },
    })
    parametrizacion: Parametrizacion,
  ): Promise<void> {
    await this.parametrizacionRepository.updateById(id, parametrizacion);
  }

  @put('/parametrizacions/{id}')
  @response(204, {
    description: 'Parametrizacion PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() parametrizacion: Parametrizacion,
  ): Promise<void> {
    await this.parametrizacionRepository.replaceById(id, parametrizacion);
  }

  @del('/parametrizacions/{id}')
  @response(204, {
    description: 'Parametrizacion DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.parametrizacionRepository.deleteById(id);
  }
}
