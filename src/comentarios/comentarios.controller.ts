import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger/dist";
import { CreateComentarioDto } from "./dto/create-comentario.dto";
import { UpdateComentarioDto } from "./dto/update-comentario.dto";
import { ComentariosService } from "./comentarios.service";

@ApiTags("comentarios")
@Controller("comentarios")
export class ComentariosController {
  constructor(private readonly service: ComentariosService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Post()
  async store(@Body() body: CreateComentarioDto) {
    return await this.service.store(body);
  }

  @Get(":id")
  async show(@Param("id") id: string) {
    return await this.service.findOneOrFail({ where: { id: id } });
  }

  @Get("/forum/:id")
  async showComments(@Param("id") id: string) {
    return await this.service.showAllComment(id);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() body: UpdateComentarioDto) {
    return await this.service.update(id, body);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param("id") id: string) {
    return await this.service.destroy(id);
  }
}
