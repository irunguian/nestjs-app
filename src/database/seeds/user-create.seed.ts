// src/database/seeds/user-create.seed.ts
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm'; 
import { User } from 'src/modules/user/user.entity'; // Adjust the path to your User entity

export default class CreateUserSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    // Create a user with the factory
    await factory(User)().createMany(10); // Adjust the number of users to create
  }
}
