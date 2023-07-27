import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import HuggingFaceUtils from './utils/huggingface-utils';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import * as handlebars from 'express-handlebars'
import { partials } from 'handlebars';

async function bootstrap() {
  HuggingFaceUtils.getInstance();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '../public'));
  app.setBaseViewsDir(join(__dirname, '../views'));
  app.engine('handlebars', handlebars.engine({
    partialsDir: join(__dirname, '../views/partials')
  }));
  app.setViewEngine('handlebars');
  await app.listen(3000);
}
bootstrap();
