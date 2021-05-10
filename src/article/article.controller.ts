import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ArticleModel } from './article.model';
import { FindArticleDto } from './dto/find-article.dto';

@Controller('article')
export class ArticleController {
  @Post('create')
  async create(@Body() dto: Omit<ArticleModel, '_id'>) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ArticleModel) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindArticleDto) {

  }
}
