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
import { hashSync } from "bcrypt";
import Permission from "src/auth/permissions/permission.enum";
import { Pai } from "src/pai/entities/pai.entity";

@Entity("forum")
export class Forum {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 30, nullable: false, unique: true })
  nome: string;

  @Column({ length: 70, nullable: false })
  comentario: string;

  @Column()
  curtida: number;

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
    // array: true,
    default: [],
  })
  permissions: Permission[];
  // @Column('simple-array', { nullable: true })
  // @IsArray()
  // habilidades: string[];
}
