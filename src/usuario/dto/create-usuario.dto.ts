import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  Matches,
} from 'class-validator';
import Permission from 'src/auth/permissions/permission.enum';
import { MessagesHelper } from 'src/helpers/messages.helper';
import { RegExHelpers } from 'src/helpers/regex.helper';
import { Pai } from 'src/pai/entities/pai.entity';
// import { Permissao } from 'src/permissao/entities/permissao.entity';
// import { Vendedor } from 'src/vendedor/entities/vendedor.entity';

export class CreateUsuarioDto {
  @ApiProperty({
    example: 'email@email.com',
    description: `O e-mail é necessário para o login, mas não necessariamente precisa ser o mesmo e-mail da rede social que estiver conectada. Login sem rede social precisa de uma senha.`,
  })
  @IsNotEmpty({ message: MessagesHelper.EMAIL_EMPTY })
  @IsEmail({}, { message: MessagesHelper.EMAIL_VALID })
  email: string;

  @ApiProperty({
    example: '123@abc',
    description: `Necessário para realização do login/acesso ao sistema`,
  })
  @IsNotEmpty({ message: MessagesHelper.SENHA_EMPTY })
  @Matches(RegExHelpers.senha, {
    message: MessagesHelper.SENHA_VALID,
  }) // Validador de  senha forte, caso precise
  password: string;

  @ApiProperty({
    example: '{"id": "32c809a9-e7af-4cc5-bb6b-dbfe6645d33a"}',
  })
  @IsObject()
  pai: Pai;

  @ApiProperty({
    example: '[habilidade_1, habilidade_2]',
    description: `Necessário para realização do ações no sistema`,
  })
  @IsOptional()
  @IsArray({ message: MessagesHelper.PERMISSION_EMPTY })
  @IsEnum(Permission, {
    each: true,
    message: MessagesHelper.PERMISSION_NOT_FOUND,
  })
  // @Type(() => Permission)
  permissions: Permission[];

  // @ApiProperty({
  //   example: 'id',
  //   description: `Necessário para realização do ações no sistema`,
  // })
  // permissao: Permissao;
}
