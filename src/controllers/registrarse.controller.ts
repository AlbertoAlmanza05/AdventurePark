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
import {Registrarse} from '../models';
import {RegistrarseRepository} from '../repositories';

export class RegistrarseController {
  constructor(
    @repository(RegistrarseRepository)
    public registrarseRepository : RegistrarseRepository,
  ) {}

  @post('/registrarses')
  @response(200, {
    description: 'Registrarse model instance',
    content: {'application/json': {schema: getModelSchemaRef(Registrarse)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Registrarse, {
            title: 'NewRegistrarse',
            exclude: ['id'],
          }),
        },
      },
    })
    registrarse: Omit<Registrarse, 'id'>,
  ): Promise<Registrarse> {
    return this.registrarseRepository.create(registrarse);
  }

  @get('/registrarses/count')
  @response(200, {
    description: 'Registrarse model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Registrarse) where?: Where<Registrarse>,
  ): Promise<Count> {
    return this.registrarseRepository.count(where);
  }

  @get('/registrarses')
  @response(200, {
    description: 'Array of Registrarse model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Registrarse, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Registrarse) filter?: Filter<Registrarse>,
  ): Promise<Registrarse[]> {
    return this.registrarseRepository.find(filter);
  }

  @patch('/registrarses')
  @response(200, {
    description: 'Registrarse PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Registrarse, {partial: true}),
        },
      },
    })
    registrarse: Registrarse,
    @param.where(Registrarse) where?: Where<Registrarse>,
  ): Promise<Count> {
    return this.registrarseRepository.updateAll(registrarse, where);
  }

  @get('/registrarses/{id}')
  @response(200, {
    description: 'Registrarse model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Registrarse, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Registrarse, {exclude: 'where'}) filter?: FilterExcludingWhere<Registrarse>
  ): Promise<Registrarse> {
    return this.registrarseRepository.findById(id, filter);
  }

  @patch('/registrarses/{id}')
  @response(204, {
    description: 'Registrarse PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Registrarse, {partial: true}),
        },
      },
    })
    registrarse: Registrarse,
  ): Promise<void> {
    await this.registrarseRepository.updateById(id, registrarse);
  }

  @put('/registrarses/{id}')
  @response(204, {
    description: 'Registrarse PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() registrarse: Registrarse,
  ): Promise<void> {
    await this.registrarseRepository.replaceById(id, registrarse);
  }

  @del('/registrarses/{id}')
  @response(204, {
    description: 'Registrarse DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.registrarseRepository.deleteById(id);
  }
}
