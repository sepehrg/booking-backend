import cors = require('cors');
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';

const port = 3003;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cors({ origin: '*' }));
  app.useStaticAssets(join(__dirname, '..', '../uploads/images'), {
    prefix: '/uploads',
    index: false,
  });

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Booking API')
    .setDescription('Booking API specifications')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('docs', app, document);

  await app.listen(port);

  Logger.log(`Server started running on http://localhost:${port}`, 'Bootstrap');
  Logger.log(
    `Api docs are built and available on http://localhost:${port}/docs`,
    'Bootstrap',
  );
}
bootstrap();
