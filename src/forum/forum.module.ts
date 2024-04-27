import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ForumController } from "./forum.controller";
import { Forum } from "./entities/forum.entity";
import { ForumService } from "./forum.service";

@Module({
  imports: [TypeOrmModule.forFeature([Forum])],
  controllers: [ForumController],
  providers: [ForumService],
  exports: [ForumService],
})
export class ForumModule {}
