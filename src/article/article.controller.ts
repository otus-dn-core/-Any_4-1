import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ArticleModel } from './article.model';
import { CreateArticleDto } from './dto/create-article.dto';
import { FindArticleDto } from './dto/find-article.dto';
import { ArticleService } from './article.service';
import { ARTICLE_NOT_FOUND_ERROR } from './article.constants';
import { IdValidationPipe } from 'src/pipes/ad-validation.pipe';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('create')
  async create(@Body() dto: CreateArticleDto) {
	return this.articleService.create(dto);
  }

  @Get(':id')
  async get(@Param('id', IdValidationPipe) id: string) {
	const article = await this.articleService.findById(id);
	if (!article) {
		throw new NotFoundException(ARTICLE_NOT_FOUND_ERROR);
	}
	return article;
  }

  @Delete(':id')
  async delete(@Param('id', IdValidationPipe) id: string) {
	const deleteArticle = await this.articleService.deleteById(id);
	if (!deleteArticle) {
		throw new NotFoundException(ARTICLE_NOT_FOUND_ERROR);
	}
  }

  @Patch(':id')
  async patch(
	@Param('id', IdValidationPipe) id: string,
	@Body() dto: ArticleModel,
  ) {
	const updatedArticle = await this.articleService.updateById(id, dto);
	if (!updatedArticle) {
		throw new NotFoundException(ARTICLE_NOT_FOUND_ERROR);
	}
	return updatedArticle;
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindArticleDto) {
	return this.articleService.findWithComments(dto);
  }
}
