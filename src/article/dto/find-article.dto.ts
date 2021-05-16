import { IsNumber, IsString } from 'class-validator';

export class FindArticleDto {
  @IsString()
  rubric: string;

  @IsNumber()
  limit: number;
}