import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  DeleteDateColumn,
  BeforeInsert,
  JoinColumn,
  OneToMany,
  JoinTable,
  ManyToMany,
} from "typeorm";
import Permission from "src/auth/permissions/permission.enum";
import { Pai } from "src/pai/entities/pai.entity";

@Entity("conteudo")
export class Conteudo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  tituloPrincipal: string;

  @Column()
  imagemPequena: string;

  @Column()
  subTitulo: string;

  @Column()
  imagemGrande: string;

  @Column()
  descricao: string;

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

  @OneToOne(() => Pai, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  pai: Pai;

  @Column({
    type: "set",
    enum: Permission,
    default: [],
  })
  permissions: Permission[];
}
