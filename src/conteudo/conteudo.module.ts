import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConteudoController } from "./conteudo.controller";
import { Conteudo } from "./entities/conteudo.entity";
import { ConteudoService } from "./conteudo.service";

@Module({
  imports: [TypeOrmModule.forFeature([Conteudo])],
  controllers: [ConteudoController],
  providers: [ConteudoService],
  exports: [ConteudoService],
})
export class ConteudoModule {}
