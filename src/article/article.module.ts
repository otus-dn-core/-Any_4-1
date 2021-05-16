import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ArticleController } from './article.controller';
import { ArticleModel } from './article.model';
import { ArticleService } from './article.service';

@Module({
  controllers: [ArticleController],
  imports: [
	TypegooseModule.forFeature([
		{
		typegooseClass: ArticleModel,
		schemaOptions: {
			collection: 'Article',
		},
		},
	]),
  ],
  providers: [ArticleService],
})
export class ArticleModule {}
