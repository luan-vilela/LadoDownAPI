import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import Permission from "src/auth/permissions/permission.enum";
import { Column } from "typeorm";

export class CreateConteudoDto {
  @ApiProperty({
    example: "Titulo principal",
    description: `Campo obrigatório!`,
  })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  @MaxLength(255, {
    message: "Título principal não pode ter mais de 255 caracteres",
  })
  @Column({ length: 255 }) // Define o tamanho
  tituloPrincipal: string;

  @ApiProperty({
    example: "Imagem Pequena URL",
    description: `Campo obrigatório!`,
  })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  @MaxLength(255, {
    message: "URL da imagem pequena não pode ter mais de 255 caracteres",
  })
  @Column({ length: 255 }) // Define o tamanho
  imagemPequena: string;

  @ApiProperty({ example: "Sub Titulo", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  @MaxLength(255, { message: "Subtítulo não pode ter mais de 255 caracteres" })
  subTitulo: string;

  @ApiProperty({
    example: "Imagem Grande URL",
    description: `Campo obrigatório!`,
  })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  @MaxLength(255, {
    message: "URL da imagem grande não pode ter mais de 255 caracteres",
  })
  @Column({ length: 255 }) // Define o tamanho
  imagemGrande: string;

  @ApiProperty({ example: "Descrição", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  @MaxLength(500, { message: "Descrição não pode ter mais de 500 caracteres" })
  @Column({ length: 500 }) // Define o tamanho
  descricao: string;

  @ApiProperty({ example: "tag", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  @MaxLength(50, { message: "Tag não pode ter mais de 50 caracteres" })
  @Column({ length: 50 }) // Define o tamanho
  tag: string;

  @ApiProperty({ example: "Autor", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  @MaxLength(100, { message: "Autor não pode ter mais de 100 caracteres" })
  @Column({ length: 100 }) // Define o tamanho
  autor: string;

  permissions: Permission[];
}
