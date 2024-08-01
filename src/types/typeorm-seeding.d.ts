// src/types/typeorm-seeding.d.ts
declare module 'typeorm-seeding' {
    import { Connection, EntityTarget } from 'typeorm';
  
    export class Seeder {
      run(factory: Factory, connection: Connection): Promise<void>;
    }
  
    export interface Factory<Entity = any> {
      create(entityClass: EntityTarget<Entity>, count?: number, factorCallback?: (entity: Entity) => Promise<Entity>): Promise<Entity[]>;
      createMany(entityClass: EntityTarget<Entity>, amount: number, factorCallback?: (entity: Entity) => Promise<Entity>): Promise<Entity[]>;
    }
  
    export function define<Entity>(entity: EntityTarget<Entity>, factoryFn: (faker: Faker.FakerStatic) => Partial<Entity>): Factory<Entity>;
  }
  
  