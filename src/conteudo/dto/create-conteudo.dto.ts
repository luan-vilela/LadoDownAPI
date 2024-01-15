import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  Length,
} from "class-validator";
import Permission from "src/auth/permissions/permission.enum";
import { MessagesHelper } from "src/helpers/messages.helper";
import { RegExHelpers } from "src/helpers/regex.helper";
import { Pai } from "src/pai/entities/pai.entity";

export class CreateConteudoDto {
  @ApiProperty({ example: "Titulo principal", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  tituloPrincipal: string;

  @ApiProperty({ example: "Imagem Pequena URL", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  imagemPequena: string;

  @ApiProperty({ example: "Sub Titulo", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  subTitulo: string;

  @ApiProperty({ example: "Imagem Grande URL", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  imagemGrande: string;

  @ApiProperty({ example: "Descrição", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({ example: "tag", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  tag: string;

  @ApiProperty({ example: "Autor", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  autor: string;

  // @Type(() => Permission)
  permissions: Permission[];
}
