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

  @Column({ type: "text" })
  subTitulo: string;

  @Column({ type: "text" })
  imagemPequena: string;

  @Column({ type: "text" })
  imagemGrande: string;

  @Column({ type: "text" })
  descricao: string;

  @Column({ type: "text" })
  subDescricao: string;

  @Column({ type: "text" })
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
