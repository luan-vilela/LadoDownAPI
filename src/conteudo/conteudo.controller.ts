import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger/dist";
import { CreateConteudoDto } from "./dto/create-conteudo.dto";
import { UpdateConteudoDto } from "./dto/update-conteudo.dto";
import { ConteudoService } from "./conteudo.service";

@ApiTags("conteudo")
@Controller("conteudo")
export class ConteudoController {
  constructor(private readonly service: ConteudoService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Post()
  async store(@Body() body: CreateConteudoDto) {
    return await this.service.store(body);
  }

  @Get(":id")
  async show(@Param("id") id: number) {
    return await this.service.findOneOrFail({ where: { id: id } });
  }

  @Patch(":id")
  async update(
    @Param("id", new ParseUUIDPipe()) id: number,
    @Body() body: UpdateConteudoDto
  ) {
    return await this.service.update(id, body);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param("id", new ParseUUIDPipe()) id: number) {
    return await this.service.destroy(id);
  }
}
