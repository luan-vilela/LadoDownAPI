import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
export class CreateForumDto {
  @ApiProperty({ example: "Paulo Lorenço", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    example: "Vou fazer um exame...",
    description: `Campo obrigatório!`,
  })
  @IsNotEmpty({ message: "Pergunta não pode ser vazio!" })
  pergunta: string;
}
