import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import Permission from "src/auth/permissions/permission.enum";

export class CreateForumDto {
  @ApiProperty({ example: "Paulo Lorenço", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    example: "Vou fazer um exame...",
    description: `Campo obrigatório!`,
  })
  @IsNotEmpty({ message: "Comentário não pode ser vazio!" })
  @Length(10, 50, {
    message: "Comentário precisa ter entre 10 e 70 caracteres",
  })
  comentario: string;

  @ApiProperty({ example: "12" })
  @IsOptional()
  curtida: number;

  @ApiProperty({ example: "Data Criação" })
  @IsOptional()
  dateCreated: Date;

  @ApiProperty({ example: "Data Update" })
  @IsOptional()
  dateUpdated: Date;

  // @Type(() => Permission)
  permissions: Permission[];
}
