import { Controller, Get, Post, Body, Param, Req, Request } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Cars } from './cars.entitiy';

@Controller('cars')
export class CarsController {
    constructor(private readonly CarsService: CarsService){}

    @Get()
    findAll(): Promise<Cars[]> {
        return this.CarsService.findAll();
    }

    @Post()
    async create(@Body() carParams) {
        return `I got your post request ! You want to create a ${carParams.make}`;
    }

    @Get(':id')
    findOne(@Param() param): Promise<Cars> {
        return this.CarsService.findOne(param.id);
    }

    @Post(':id')
    async update(@Body() carParams, @Param() params) {
        return `I got your post request ! You want to edit a ${carParams.make} belonging to ${params.id}`;
    }

    @Post(':id/delete')
    async delete(@Param() params) {
        return `planning to delete ${params.id}`;
    } 
}
