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
import {Seguridad} from '../models';
import {SeguridadRepository} from '../repositories';

export class SeguridadController {
  constructor(
    @repository(SeguridadRepository)
    public seguridadRepository : SeguridadRepository,
  ) {}

  @post('/seguridads')
  @response(200, {
    description: 'Seguridad model instance',
    content: {'application/json': {schema: getModelSchemaRef(Seguridad)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Seguridad, {
            title: 'NewSeguridad',
            exclude: ['id'],
          }),
        },
      },
    })
    seguridad: Omit<Seguridad, 'id'>,
  ): Promise<Seguridad> {
    return this.seguridadRepository.create(seguridad);
  }

  @get('/seguridads/count')
  @response(200, {
    description: 'Seguridad model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Seguridad) where?: Where<Seguridad>,
  ): Promise<Count> {
    return this.seguridadRepository.count(where);
  }

  @get('/seguridads')
  @response(200, {
    description: 'Array of Seguridad model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Seguridad, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Seguridad) filter?: Filter<Seguridad>,
  ): Promise<Seguridad[]> {
    return this.seguridadRepository.find(filter);
  }

  @patch('/seguridads')
  @response(200, {
    description: 'Seguridad PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Seguridad, {partial: true}),
        },
      },
    })
    seguridad: Seguridad,
    @param.where(Seguridad) where?: Where<Seguridad>,
  ): Promise<Count> {
    return this.seguridadRepository.updateAll(seguridad, where);
  }

  @get('/seguridads/{id}')
  @response(200, {
    description: 'Seguridad model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Seguridad, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Seguridad, {exclude: 'where'}) filter?: FilterExcludingWhere<Seguridad>
  ): Promise<Seguridad> {
    return this.seguridadRepository.findById(id, filter);
  }

  @patch('/seguridads/{id}')
  @response(204, {
    description: 'Seguridad PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Seguridad, {partial: true}),
        },
      },
    })
    seguridad: Seguridad,
  ): Promise<void> {
    await this.seguridadRepository.updateById(id, seguridad);
  }

  @put('/seguridads/{id}')
  @response(204, {
    description: 'Seguridad PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() seguridad: Seguridad,
  ): Promise<void> {
    await this.seguridadRepository.replaceById(id, seguridad);
  }

  @del('/seguridads/{id}')
  @response(204, {
    description: 'Seguridad DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.seguridadRepository.deleteById(id);
  }
}
