import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreatePaiDto {
    @ApiProperty({
        example: 'string',
      })
      @IsOptional()
      @IsString()
      nome: string;

}
