import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Park,
  Persona,
} from '../models';
import {ParkRepository} from '../repositories';

export class ParkPersonaController {
  constructor(
    @repository(ParkRepository) protected parkRepository: ParkRepository,
  ) { }

  @get('/parks/{id}/personas', {
    responses: {
      '200': {
        description: 'Array of Park has many Persona',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Persona)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Persona>,
  ): Promise<Persona[]> {
    return this.parkRepository.personas(id).find(filter);
  }

  @post('/parks/{id}/personas', {
    responses: {
      '200': {
        description: 'Park model instance',
        content: {'application/json': {schema: getModelSchemaRef(Persona)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Park.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {
            title: 'NewPersonaInPark',
            exclude: ['id'],
            optional: ['parkId']
          }),
        },
      },
    }) persona: Omit<Persona, 'id'>,
  ): Promise<Persona> {
    return this.parkRepository.personas(id).create(persona);
  }

  @patch('/parks/{id}/personas', {
    responses: {
      '200': {
        description: 'Park.Persona PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {partial: true}),
        },
      },
    })
    persona: Partial<Persona>,
    @param.query.object('where', getWhereSchemaFor(Persona)) where?: Where<Persona>,
  ): Promise<Count> {
    return this.parkRepository.personas(id).patch(persona, where);
  }

  @del('/parks/{id}/personas', {
    responses: {
      '200': {
        description: 'Park.Persona DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Persona)) where?: Where<Persona>,
  ): Promise<Count> {
    return this.parkRepository.personas(id).delete(where);
  }
}
