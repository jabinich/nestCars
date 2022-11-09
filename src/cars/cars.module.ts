import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './cars.entitiy';

@Module({
  imports: [TypeOrmModule.forFeature([Cars])],
  providers: [CarsService],
  controllers: [CarsController]
})
export class CarsModule {}
