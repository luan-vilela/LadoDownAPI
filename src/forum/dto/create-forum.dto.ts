import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import Permission from "src/auth/permissions/permission.enum";
import { Column } from "typeorm";

export class CreateForumDto {
  @ApiProperty({ example: "Paulo Lorenço", description: `Campo obrigatório!` })
  @IsString({ message: "Nome não pode ser vazio!" })
  @IsNotEmpty()
  @Length(1, 255, { message: "Nome deve ter entre 1 e 255 caracteres" })
  @Column({ length: 255 }) // Define o tamanho
  nome: string;

  @ApiProperty({
    example: "Vou fazer um exame...",
    description: `Campo obrigatório!`,
  })
  @IsNotEmpty({ message: "Comentário não pode ser vazio!" })
  @Length(1, 1000, { message: "Comentário deve ter entre 1 e 1000 caracteres" })
  @Column({ length: 1000 }) // Define o tamanho
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
