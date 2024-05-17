import { Module } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comentario } from "./entities/comentario.entity";
import { ForumService } from 'src/forum/forum.service';
import { Forum } from 'src/forum/entities/forum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario, Forum])],
  controllers: [ComentariosController],
  providers: [ComentariosService, ForumService],
  exports: [ComentariosService, ForumService],
})
export class ComentariosModule {}


