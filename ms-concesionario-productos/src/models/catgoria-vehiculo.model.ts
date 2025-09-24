import {Entity, model, property} from '@loopback/repository';

@model({
  settings:{
    foreignKeys:{
      fk_cat_veh_vehiculo:{
        name: 'fk_cat_veh_vehiculo',
        entity:'Vehiculo',
        entityKey:'id',
        foreignKey: 'id_vehiculo'
      },
      fk_cat_veh_categoria:{
        name: 'fk_cat_veh_categoria',
        entity:'Categoria',
        entityKey:'id',
        foreignKey: 'id_categoria'
      }
    }
  }
})
export class CatgoriaVehiculo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  id_vehiculo?: number;

  @property({
    type: 'number',
  })
  id_categoria?: number;

  constructor(data?: Partial<CatgoriaVehiculo>) {
    super(data);
  }
}

export interface CatgoriaVehiculoRelations {
  // describe navigational properties here
}

export type CatgoriaVehiculoWithRelations = CatgoriaVehiculo & CatgoriaVehiculoRelations;
