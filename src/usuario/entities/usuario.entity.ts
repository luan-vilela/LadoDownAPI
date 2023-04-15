// import { Permissao } from 'src/permissao/entities/permissao.entity';
// import { Vendedor } from 'src/vendedor/entities/vendedor.entity';
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
} from 'typeorm';
import { hashSync } from 'bcrypt';
import { IsArray } from 'class-validator';
import Permission from 'src/auth/permissions/permission.enum';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, nullable: false, unique: true })
  email: string;

  @Column({ length: 500, nullable: false })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  // @OneToOne(() => Vendedor, {
  //   eager: true,
  //   cascade: true,
  // })
  // @JoinColumn()
  // vendedor: Vendedor;

  // @ManyToMany(() => Permissao, { eager: true })
  // @JoinTable()
  // permissoes: Permissao[];

  @Column({
    type: 'set',
    enum: Permission,
    // array: true,
    default: [],
  })
  permissions: Permission[];
  // @Column('simple-array', { nullable: true })
  // @IsArray()
  // habilidades: string[];

  @BeforeInsert()
  hashSenha = () => {
    this.password = hashSync(this.password, 10);
  };
}
