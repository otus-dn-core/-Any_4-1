import { IsString, IsDate } from 'class-validator';
export class CreateCommentDto {
  @IsString()
  name: string;

  // @IsDate()
  // createdAt: Date;

  @IsString()
  bodyComment: string;

  @IsString()
  articleId: string;
}