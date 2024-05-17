import { ApiProperty } from "@nestjs/swagger";
import {  MaxLength } from "class-validator";
import { Column } from "typeorm";

export class CreateConteudoDto {
  @ApiProperty({ example: "Titulo principal" })
  @MaxLength(500, { message: "Título principal não pode ter mais de 255 caracteres" })
  @Column({ length: 500 })
  tituloPrincipal: string;

  @ApiProperty({ example: "Sub Titulo" })
  @MaxLength(10000, { message: "Subtítulo não pode ter mais de 255 caracteres" })
  subTitulo: string;

  @ApiProperty({ example: "Imagem Pequena URL" })
  @MaxLength(10000, { message: "URL da imagem pequena não pode ter mais de 255 caracteres" })
  @Column({ length: 10000 })
  imagemPequena: string;

  @ApiProperty({ example: "Imagem Grande URL" })
  @MaxLength(10000, { message: "URL da imagem grande não pode ter mais de 255 caracteres" })
  @Column({ length: 10000 })
  imagemGrande: string;

  @ApiProperty({ example: "Descrição" })
  @MaxLength(10000, { message: "Descrição não pode ter mais de 500 caracteres" })
  @Column({ length: 10000 })
  descricao: string;

  @ApiProperty({ example: "Descrição" })
  @MaxLength(10000, { message: "Descrição não pode ter mais de 500 caracteres" })
  @Column({ length: 10000 })
  subDescricao: string;

  @ApiProperty({ example: "Referencia" })
  @MaxLength(10000, { message: "Referencia não pode ter mais de 500 caracteres" })
  @Column({ length: 10000 })
  referencia: string;

  @ApiProperty({ example: "Tag" })
  @MaxLength(50, { message: "Tag não pode ter mais de 50 caracteres" })
  @Column({ length: 50 })
  tag: string;

  @ApiProperty({ example: "Autor" })
  @MaxLength(500, { message: "Autor não pode ter mais de 100 caracteres" })
  @Column({ length: 500 })
  autor: string;
}
