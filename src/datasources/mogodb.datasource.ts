import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mogodb',
  connector: 'mongodb',
  url: 'mongodb+srv://Web_Code:Webcode@clusteradventurepark.k2z2hi9.mongodb.net/Registros',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MogodbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mogodb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mogodb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
