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
import {Park} from '../models';
import {ParkRepository} from '../repositories';

export class ParkController {
  constructor(
    @repository(ParkRepository)
    public parkRepository : ParkRepository,
  ) {}

  @post('/parks')
  @response(200, {
    description: 'Park model instance',
    content: {'application/json': {schema: getModelSchemaRef(Park)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Park, {
            title: 'NewPark',
            exclude: ['id'],
          }),
        },
      },
    })
    park: Omit<Park, 'id'>,
  ): Promise<Park> {
    return this.parkRepository.create(park);
  }

  @get('/parks/count')
  @response(200, {
    description: 'Park model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Park) where?: Where<Park>,
  ): Promise<Count> {
    return this.parkRepository.count(where);
  }

  @get('/parks')
  @response(200, {
    description: 'Array of Park model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Park, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Park) filter?: Filter<Park>,
  ): Promise<Park[]> {
    return this.parkRepository.find(filter);
  }

  @patch('/parks')
  @response(200, {
    description: 'Park PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Park, {partial: true}),
        },
      },
    })
    park: Park,
    @param.where(Park) where?: Where<Park>,
  ): Promise<Count> {
    return this.parkRepository.updateAll(park, where);
  }

  @get('/parks/{id}')
  @response(200, {
    description: 'Park model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Park, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Park, {exclude: 'where'}) filter?: FilterExcludingWhere<Park>
  ): Promise<Park> {
    return this.parkRepository.findById(id, filter);
  }

  @patch('/parks/{id}')
  @response(204, {
    description: 'Park PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Park, {partial: true}),
        },
      },
    })
    park: Park,
  ): Promise<void> {
    await this.parkRepository.updateById(id, park);
  }

  @put('/parks/{id}')
  @response(204, {
    description: 'Park PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() park: Park,
  ): Promise<void> {
    await this.parkRepository.replaceById(id, park);
  }

  @del('/parks/{id}')
  @response(204, {
    description: 'Park DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.parkRepository.deleteById(id);
  }
}
