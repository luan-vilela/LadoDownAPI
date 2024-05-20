import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsObject, IsOptional, IsString, Length } from "class-validator";
import { Forum } from "src/forum/entities/forum.entity";

export class CreateComentarioDto {
  @ApiProperty({ example: "Paulo Lorenço", description: `Campo obrigatório!` })
  @IsString({ message: "Nome deve ser uma string" })
  @IsNotEmpty({ message: "Nome não pode ser vazio" })
  @Length(1, 255, { message: "Nome deve ter entre 1 e 255 caracteres" })
  nome: string;

  @ApiProperty({
    example: "Vou fazer um exame...",
    description: `Campo obrigatório!`,
  })
  @IsString({ message: "Comentário deve ser uma string" })
  @IsNotEmpty({ message: "Comentário não pode ser vazio" })
  comentario: string;

  @ApiProperty({
    example: '{"id": "32c809a9-e7af-4cc5-bb6b-dbfe6645d33a"}',
  })
  @IsObject()
  forum: Forum;
}
