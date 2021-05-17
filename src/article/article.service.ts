import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ArticleModel } from './article.model';
import { CreateArticleDto } from './dto/create-article.dto';
import { FindArticleDto } from './dto/find-article.dto';
import { CommentModel } from '../comment/comment.model';

@Injectable()
export class ArticleService {
	constructor(@InjectModel(ArticleModel) private readonly articleModel: ModelType<ArticleModel>) {}

	async create(dto: CreateArticleDto) {
		return this.articleModel.create(dto);
	}

	async findById(id: string) {
		return this.articleModel.findById(id).exec();
	}

	async deleteById(id: string) {
		return this.articleModel.findByIdAndDelete(id).exec();
	}

	async updateById(id: string, dto: CreateArticleDto) {
		return this.articleModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}

	async findWithComments(dto: FindArticleDto) {
		return this.articleModel.aggregate([
		{
			$match: {
				rubric: dto.rubric,
			}
		},
		{
			$sort: {
				_id: 1,
			}
		},
		{
			$limit: dto.limit,
		},
		{
			$lookup: {
				from: 'Comment',
				localField: '_id',
				foreignField: 'articleId',
				as: 'comments',
			}
		},
		{
			$addFields: {
				commentCount: { $size: '$comments' }
			}
		}
	]).exec() as (ArticleModel & { comment: CommentModel[], commentCount: number })[];
	}
}
