import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity("conteudo")
export class Conteudo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tituloPrincipal: string;

  @Column()
  subTitulo: string;

  @Column()
  imagemPequena: string;

  @Column()
  imagemGrande: string;

  @Column()
  descricao: string;

  @Column()
  subDescricao: string;

  @Column()
  referencia: string;

  @Column()
  tag: string;

  @Column()
  autor: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
