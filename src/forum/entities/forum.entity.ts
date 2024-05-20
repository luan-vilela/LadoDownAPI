import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
@Entity("forum")
export class Forum {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column({ type: "text" })
  pergunta: string;

  @Column({ default: 0 })
  qtd_comentario: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
