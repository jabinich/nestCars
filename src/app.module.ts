import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './cars/cars.controller';
import { Cars } from './cars/cars.entitiy';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'transportation',
      entities: [Cars],
      synchronize: false, //be carefull
    }),
    CarsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
