import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import HuggingFaceUtils from './utils/huggingface-utils';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';

async function bootstrap() {
  HuggingFaceUtils.getInstance();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '../public'));
  app.setBaseViewsDir(join(__dirname, '../views'));
  app.setViewEngine("hbs");
  await app.listen(3000);
}
bootstrap();
