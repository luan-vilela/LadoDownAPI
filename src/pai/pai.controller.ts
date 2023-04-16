import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { PaiService } from './pai.service';
import { CreatePaiDto } from './dto/create-pai.dto';
import { UpdatePaiDto } from './dto/update-pai.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('pai')
@Controller('pai')
export class PaiController {
  constructor(private readonly service: PaiService) {}

  @Post()
  create(@Body() createDto: CreatePaiDto) {
    return this.service.create(createDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDta: UpdatePaiDto,
  ) {
    return this.service.update(id, updateDta);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}