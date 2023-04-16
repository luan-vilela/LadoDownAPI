import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination } from 'src/paginate/pagination';
import { PaginationOptionsInterface } from 'src/paginate/pagination.options.interface';
import { FindOneOptions, Like, Repository } from 'typeorm';
import { CreatePaiDto } from './dto/create-pai.dto';
import { UpdatePaiDto } from './dto/update-pai.dto';
import { Pai } from './entities/pai.entity';

@Injectable()
export class PaiService {
  constructor(
    @InjectRepository(Pai)
    private readonly repository: Repository<Pai>,
  ) {}

  createPage = (
    results,
    total,
    options: PaginationOptionsInterface,
  ): Pagination<Pai> => {
    const offset = Number(options.offset);
    const limit = Number(options.limit);
    const page = Number(total);

    const nextOffset = offset + limit >= page ? null : offset + limit;
    const previusOffset =
      offset > 0 ? (offset - limit < 0 ? 0 : offset - limit) : null;
    const lastOffset = offset + limit > page ? null : page - limit;

    const next =
      nextOffset !== null
        ? 'offset=' + nextOffset + '&limit=' + options.limit
        : null;
    const previous =
      previusOffset !== null && total > 0
        ? 'offset=' + previusOffset + '&limit=' + options.limit
        : null;

    const last =
      lastOffset !== null && next !== null
        ? 'offset=' + lastOffset + '&limit=' + options.limit
        : null;

    const page_total = Math.ceil(total / limit);
    const status = true;
    return new Pagination<Pai>({
      status,
      results,
      total,
      page_total,
      next,
      previous,
      last,
    });
  };

  async paginate(
    options: PaginationOptionsInterface,
    optionsLike: string[],
    customWhere = {},
  ): Promise<Pagination<Pai>> {
    let optionWhere = {};
    optionWhere = customWhere;
    if (options.like !== 'all') {
      const optionsLikes = optionsLike.map((like) => {
        return { [like]: Like('%' + options.like + '%'), ...customWhere };
      });
      optionWhere = optionsLikes;
    }

    const [results, total] = await this.repository.findAndCount({
      where: optionWhere,
      order: { nome: 'ASC' },
      take: options.limit,
      skip: options.offset,
    });

    return this.createPage(results, total, options);
  }

  create(createPaiDto: CreatePaiDto): Promise<any> {
    const vendedor = this.repository.create(createPaiDto);
    return this.repository
      .save(vendedor)
      .then((resultado) => {
        return {
          status: true,
          mensagem: resultado,
        };
      })
      .catch((error) => {
        return {
          status: false,
          mensagem: error,
        };
      });
  }

  findAll(): Promise<Pai[]> {
    return this.repository.find({ order: { nome: 'ASC' } });
  }

  findOne(id: string): Promise<Pai> {
    return this.repository.findOneBy({
      id: id,
    });
  }

  async update(
    id: string,
    updatePaiDto: UpdatePaiDto,
  ): Promise<Pai> {
    const vendedor = await this.repository.preload({
      id: id,
      ...updatePaiDto,
    });
    if (!vendedor) {
      throw new NotFoundException(`Pai ${id} not found`);
    }
    return this.repository.save(vendedor);
  }

  async remove(id: string) {
    const vendedor = await this.findOne(id);
    return this.repository.remove(vendedor);
  }

  async destroy(id: string) {
    await this.repository.findOneOrFail({ where: { id: id } });
    this.repository.softDelete({ id });
  }

  async findOneOrFail(options: FindOneOptions<Pai>): Promise<Pai> {
    try {
      return this.repository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}