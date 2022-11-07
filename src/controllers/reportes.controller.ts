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
import {Reportes} from '../models';
import {ReportesRepository} from '../repositories';

export class ReportesController {
  constructor(
    @repository(ReportesRepository)
    public reportesRepository : ReportesRepository,
  ) {}

  @post('/reportes')
  @response(200, {
    description: 'Reportes model instance',
    content: {'application/json': {schema: getModelSchemaRef(Reportes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reportes, {
            title: 'NewReportes',
            exclude: ['id'],
          }),
        },
      },
    })
    reportes: Omit<Reportes, 'id'>,
  ): Promise<Reportes> {
    return this.reportesRepository.create(reportes);
  }

  @get('/reportes/count')
  @response(200, {
    description: 'Reportes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Reportes) where?: Where<Reportes>,
  ): Promise<Count> {
    return this.reportesRepository.count(where);
  }

  @get('/reportes')
  @response(200, {
    description: 'Array of Reportes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Reportes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Reportes) filter?: Filter<Reportes>,
  ): Promise<Reportes[]> {
    return this.reportesRepository.find(filter);
  }

  @patch('/reportes')
  @response(200, {
    description: 'Reportes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reportes, {partial: true}),
        },
      },
    })
    reportes: Reportes,
    @param.where(Reportes) where?: Where<Reportes>,
  ): Promise<Count> {
    return this.reportesRepository.updateAll(reportes, where);
  }

  @get('/reportes/{id}')
  @response(200, {
    description: 'Reportes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Reportes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Reportes, {exclude: 'where'}) filter?: FilterExcludingWhere<Reportes>
  ): Promise<Reportes> {
    return this.reportesRepository.findById(id, filter);
  }

  @patch('/reportes/{id}')
  @response(204, {
    description: 'Reportes PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reportes, {partial: true}),
        },
      },
    })
    reportes: Reportes,
  ): Promise<void> {
    await this.reportesRepository.updateById(id, reportes);
  }

  @put('/reportes/{id}')
  @response(204, {
    description: 'Reportes PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() reportes: Reportes,
  ): Promise<void> {
    await this.reportesRepository.replaceById(id, reportes);
  }

  @del('/reportes/{id}')
  @response(204, {
    description: 'Reportes DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.reportesRepository.deleteById(id);
  }
}
