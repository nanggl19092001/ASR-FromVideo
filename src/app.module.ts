import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';
import TranslateModule from './translate/translate.module';

@Module({
  imports: [ TranslateModule, HomeModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
