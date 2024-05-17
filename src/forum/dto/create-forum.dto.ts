import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateForumDto {
  @ApiProperty({ example: "Paulo Lorenço", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  @Length(1, 255, { message: "Nome deve ter entre 1 e 255 caracteres" })
  nome: string;

  @ApiProperty({
    example: "Vou fazer um exame...",
    description: `Campo obrigatório!`,
  })
  @IsNotEmpty({ message: "Pergunta não pode ser vazio!" })
  @Length(1, 1000, { message: "Pergunta deve ter entre 1 e 1000 caracteres" })
  pergunta: string;
}
