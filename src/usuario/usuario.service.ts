import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll() {
    return await this.usuarioRepository.find({
      select: ['id', 'email', 'created_at'],
    });
  }

  async findOneOrFail(options: FindOneOptions<Usuario>): Promise<Usuario> {
    try {
      return this.usuarioRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateUsuarioDto) {
    const user = await this.usuarioRepository.create(data);
    return await this.usuarioRepository.save(user);
  }

  async update(id: string, data: UpdateUsuarioDto) {
    if (data.password) {
      data.password = hashSync(data.password, 10);
    }

    const user = await this.findOneOrFail({ where: { id: id } });
    this.usuarioRepository.merge(user, data);

    return await this.usuarioRepository.save(user);
  }

  async destroy(id: string) {
    await this.usuarioRepository.findOneOrFail({ where: { id: id } });
    this.usuarioRepository.softDelete({ id });
  }
}
