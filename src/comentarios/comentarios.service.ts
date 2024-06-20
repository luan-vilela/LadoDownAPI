import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, Repository } from "typeorm";
import { CreateComentarioDto } from "./dto/create-comentario.dto";
import { UpdateComentarioDto } from "./dto/update-comentario.dto";
import { Comentario } from "./entities/comentario.entity";
import { ForumService } from "src/forum/forum.service";

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentario)
    private readonly comentarioRepository: Repository<Comentario>,
    private readonly forumService: ForumService
  ) {}

  async findAll(): Promise<Comentario[]> {
    return this.comentarioRepository.find({
      relations: {
        forum: true,
      },
    });
  }

  async showAllComment(forumId: string): Promise<Comentario[]> {
    return this.comentarioRepository.find({
      relations: {
        forum: true,
      },
      where: {
        forum: {
          id: forumId,
        },
      },
    });
  }

  async findOneOrFail(
    options: FindOneOptions<Comentario>
  ): Promise<Comentario> {
    try {
      return this.comentarioRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(data: CreateComentarioDto) {
    const comment = await this.comentarioRepository.create(data);
    const post = await this.comentarioRepository.save(comment);
    await this.updateForumComment(comment.forum.id, 1);
    return post;
  }

  private async updateForumComment(id: string, qtd: number): Promise<void> {
    await this.forumService.updateComment(id, qtd);
  }

  async update(id: string, data: UpdateComentarioDto): Promise<Comentario> {
    const comentario = await this.comentarioRepository.preload({
      id: id,
      ...data,
    });
    if (!comentario) {
      throw new NotFoundException(`Comentario ${id} not found`);
    }
    return this.comentarioRepository.save(comentario);
  }

  async destroy(id: string) {
    try {
      const comment = await this.comentarioRepository.findOneOrFail({
        where: { id: id },
        relations: ['forum'],
      });

      await this.updateForumComment(comment.forum.id, -1);
      await this.comentarioRepository.softDelete({ id });

      return { message: 'Comentario deleted and forum comments count updated successfully.' };
    } catch (error) {
      throw new NotFoundException(`Error deleting comentario or updating forum comments count: ${error.message}`);
    }
  }
}
