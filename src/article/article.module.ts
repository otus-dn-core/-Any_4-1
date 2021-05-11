import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ArticleController } from './article.controller';
import { ArticleModel } from './article.model';

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
})
export class ArticleModule {}
