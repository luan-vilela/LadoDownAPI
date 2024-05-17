import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, Repository } from "typeorm";
import { CreateForumDto } from "./dto/create-forum.dto";
import { UpdateForumDto } from "./dto/update-forum.dto";
import { Forum } from "./entities/forum.entity";
import { hashSync } from "bcrypt";

@Injectable()
export class ForumService {
  constructor(
    @InjectRepository(Forum)
    private readonly forumRepository: Repository<Forum>
  ) {}

  async findAll(): Promise<Forum[]> {
    return this.forumRepository.find();
  }

  async findOneOrFail(options: FindOneOptions<Forum>): Promise<Forum> {
    try {
      return this.forumRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateForumDto) {
    const user = await this.forumRepository.create(data);
    return await this.forumRepository.save(user);
  }

  async update(id: string, data: UpdateForumDto): Promise<Forum> {
    const forum = await this.forumRepository.preload({
      id: id,
      ...data,
    });
    if (!forum) {
      throw new NotFoundException(`Forum ${id} not found`);
    }
    return this.forumRepository.save(forum);
  }

  async destroy(id: string) {
    await this.forumRepository.findOneOrFail({ where: { id: id } });
    this.forumRepository.softDelete({ id });
  }

  async updateComment(id: string, controle: number): Promise<void> {
   const forum = await this.forumRepository.findOneOrFail({ where: { id: id } });
    await this.forumRepository.update(id, { qtd_comentario: forum.qtd_comentario + controle });
  }
}
