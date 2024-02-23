import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) { }

  @Get()
  getAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    const car = this.carsService.create(createCarDto);
    return car;
  }
  @Patch(':id')
  update(@Body() updateCarDto: UpdateCarDto, @Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  Delete(@Param('id', ParseUUIDPipe) id: string) {
   return this.carsService.delete(id);
  }
}
