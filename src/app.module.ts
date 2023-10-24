import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductController } from './controllers/product.controller';
import { ArticleController } from './controllers/article.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ProductController, ArticleController],
  providers: [AppService],
})
export class AppModule {}
