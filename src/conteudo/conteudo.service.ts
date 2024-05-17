import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, Repository } from "typeorm";
import { CreateConteudoDto } from "./dto/create-conteudo.dto";
import { UpdateConteudoDto } from "./dto/update-conteudo.dto";
import { Conteudo } from "./entities/conteudo.entity";
import { hashSync } from "bcrypt";

@Injectable()
export class ConteudoService {
  constructor(
    @InjectRepository(Conteudo)
    private readonly conteudoRepository: Repository<Conteudo>
  ) {}

  async findAll(): Promise<Conteudo[]> {
    return this.conteudoRepository.find();
  }

  async findOneOrFail(options: FindOneOptions<Conteudo>): Promise<Conteudo> {
    try {
      return this.conteudoRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateConteudoDto) {
    const user = await this.conteudoRepository.create(data);
    return await this.conteudoRepository.save(user);
  }

  async update(id: number, data: UpdateConteudoDto): Promise<Conteudo> {
    const conteudo = await this.conteudoRepository.preload({
      id: id,
      ...data,
    });
    if (!conteudo) {
      throw new NotFoundException(`Conteudo ${id} not found`);
    }
    return this.conteudoRepository.save(conteudo);
  }

  async destroy(id: number) {
    await this.conteudoRepository.findOneOrFail({ where: { id: id } });
    this.conteudoRepository.softDelete({ id });
  }
}
