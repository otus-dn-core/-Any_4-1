import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentService } from './comment.service';
import { COMMENT_NOT_FOUND } from './comment.constanst';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateCommentDto) {
  	return this.commentService.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
	  const deletedDoc = await this.commentService.delete(id);
	  if(!deletedDoc) {
		  throw new HttpException(COMMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
	  }
  }

  @Get('byArticle/:articleId')
  async getByArticle(@Param('articleId') articleId: string) {
	  return this.commentService.findByArticleId(articleId);
  }
}
