import { IsArray, IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  urlSynonym: string;

  @IsArray()
  @IsString({ each: true })
  image: string[];

  @IsString()
  title: string;

  @IsString()
  subtitile: string;

  @IsString()
  bodyAnons: string;

  @IsString()
  bodyText: string;

  @IsDate()
  datePublication: Date;

  @IsDate()
  dateUpdate: Date;

  @IsBoolean()
  publication: boolean;

  @IsString()
  author: string;

  @IsArray()
  @IsString({ each: true })
  metaTags: string[];

  @IsBoolean()
  blockInfo: boolean;

  @IsString()
  position: string;

  @IsArray()
  @IsString({ each: true })
  rubric: string[];
}