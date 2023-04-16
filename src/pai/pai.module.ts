import { Module } from '@nestjs/common';
import { PaiService } from './pai.service';
import { PaiController } from './pai.controller';
import { Pai } from './entities/pai.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pai])],
  controllers: [PaiController],
  providers: [PaiService]
})
export class PaiModule {}
