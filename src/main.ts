import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import HuggingFaceUtils from './utils/huggingface-utils';
async function bootstrap() {
  HuggingFaceUtils.getInstance();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
