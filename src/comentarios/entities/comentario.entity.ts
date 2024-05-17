import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Forum } from "src/forum/entities/forum.entity";

@Entity("comentario")
export class Comentario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column()
  comentario: string;

  @CreateDateColumn() 
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;  

  @ManyToOne(() => Forum)
  @JoinColumn({ name: "forum_id", referencedColumnName: "id" }) 
  forum: Forum;  
}
