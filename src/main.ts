import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Validate } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - PRIMAZA API')
    .setDescription(
      'Aqui é possivel conferir e testar algumas ou todas chamadas disponiveis para a aplicação "Sistema de cotação - Primaza". É importante ressaltar que este ambiente deve estar online somente no ambiente de desenvolvimento',
    )
    .setVersion('1.0')
    .addTag('usuario')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  await app.listen(process.env.SERVER_PORT);
  console.log(`Aplicação rodando na porta: ${await app.getUrl()}`);
}
bootstrap();

// {
//   region: process.env.BUCKET_DEFAULT_REGION,
//   // endpoint: process.env.LINODE_OBJECT_STORAGE_ENDPOINT,
//   sslEnabled: true,
//   s3ForcePathStyle: false,
//   credentials: new Credentials({
//     accessKeyId: process.env.BUCKET_ACCESS_KEY_ID,
//     secretAccessKey: process.env.BUCKET_SECRET_ACCESS_KEY,
//   }
