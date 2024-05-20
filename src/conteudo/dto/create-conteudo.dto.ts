import { ApiProperty } from "@nestjs/swagger";
import { Column } from "typeorm";

export class CreateConteudoDto {
  @ApiProperty({ example: "Titulo principal" })
  @Column()
  tituloPrincipal: string;

  @ApiProperty({ example: "Sub Titulo" })
  subTitulo: string;

  @ApiProperty({ example: "Imagem Pequena URL" })
  @Column()
  imagemPequena: string;

  @ApiProperty({ example: "Imagem Grande URL" })
  @Column()
  imagemGrande: string;

  @ApiProperty({ example: "Descrição" })
  @Column()
  descricao: string;

  @ApiProperty({ example: "Descrição" })
  @Column()
  subDescricao: string;

  @ApiProperty({ example: "Referencia" })
  @Column()
  referencia: string;

  @ApiProperty({ example: "Tag" })
  @Column()
  tag: string;

  @ApiProperty({ example: "Autor" })
  @Column()
  autor: string;
}
