import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {CatgoriaVehiculo, CatgoriaVehiculoRelations} from '../models';

export class CatgoriaVehiculoRepository extends DefaultCrudRepository<
  CatgoriaVehiculo,
  typeof CatgoriaVehiculo.prototype.id,
  CatgoriaVehiculoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(CatgoriaVehiculo, dataSource);
  }
}
