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
  Put,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiTags } from "@nestjs/swagger/dist";
import Permission from "src/auth/permissions/permission.enum";
import PermissionGuard from "src/auth/permissions/permission.guard";
import { CreateConteudoDto } from "./dto/create-conteudo.dto";
import { UpdateConteudoDto } from "./dto/update-conteudo.dto";
import { ConteudoService } from "./conteudo.service";

@ApiTags("conteudo")
@Controller("conteudo")
// @UseGuards(AuthGuard('jwt'))
export class ConteudoController {
  constructor(private readonly service: ConteudoService) {}

  @Get()
  // @UseGuards(PermissionGuard(Permission.Admin, Permission.UsuarioRead))
  async index() {
    return await this.service.findAll();
  }

  @Post()
  // @UseGuards(PermissionGuard(Permission.Admin, Permission.UsuarioPost))
  async store(@Body() body: CreateConteudoDto) {
    return await this.service.store(body);
  }

  @Get(":id")
  // @UseGuards(PermissionGuard(Permission.Admin, Permission.UsuarioId))
  async show(@Param("id", new ParseUUIDPipe()) id: string) {
    return await this.service.findOneOrFail({ where: { id: id } });
  }

  @Patch(":id")
  // @UseGuards(PermissionGuard(Permission.Admin, Permission.UsuarioUpdate))
  async update(
    @Param("id", new ParseUUIDPipe()) id: string,
    @Body() body: UpdateConteudoDto
  ) {
    return await this.service.update(id, body);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  // @UseGuards(PermissionGuard(Permission.Admin, Permission.UsuarioDelete))
  async destroy(@Param("id", new ParseUUIDPipe()) id: string) {
    return await this.service.destroy(id);
  }
}
