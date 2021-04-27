import * as path from 'path';
import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import * as dotenv from 'dotenv'

dotenv.config({ path: `../.env.${process.env.NODE_ENV}` })

console.log(process.env.NODE_ENV)

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json')).toString('utf-8'),
);

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      allowedHeaders: '*',
    },
  });

  const options = new DocumentBuilder()
    .setTitle(pkg.name)
    .setDescription(pkg.description)
    .setVersion(pkg.version)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(port);
  console.log(`Application start on ${port} port.`, 'NestApplication');
}
bootstrap();
