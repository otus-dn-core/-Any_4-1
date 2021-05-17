import { 
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe 
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentService } from './comment.service';
import { COMMENT_NOT_FOUND } from './comment.constanst';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { UserEmail } from 'src/decorators/user-email.decorato';
import { IdValidationPipe } from 'src/pipes/ad-validation.pipe';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateCommentDto) {
	return this.commentService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id', IdValidationPipe) id: string) {
	const deletedDoc = await this.commentService.delete(id);
	if (!deletedDoc) {
		throw new HttpException(COMMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
	}
  }

  @UseGuards(JwtAuthGuard)
  @Get('byArticle/:articleId')
  // async getByArticle(@Param('articleId') articleId: string, @UserEmail() email: string) {
  async getByArticle(@Param('articleId', IdValidationPipe) articleId: string) {
	// console.log(email);
	return this.commentService.findByArticleId(articleId);
  }
}
