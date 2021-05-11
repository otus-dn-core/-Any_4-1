import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { CommentModel } from './comment.model';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(
	@InjectModel(CommentModel)
	private readonly commentModel: ModelType<CommentModel>,
  ) {}

  async create(dto: CreateCommentDto): Promise<DocumentType<CommentModel>> {
	return this.commentModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<CommentModel> | null> {
	return this.commentModel.findByIdAndDelete(id).exec();
  }

  async findByArticleId(
	articleId: string,
  ): Promise<DocumentType<CommentModel>[]> {
	return this.commentModel
		.find({ articleId: Types.ObjectId(articleId) })
		.exec();
  }

  async deleteByArticleId(articleId: string) {
	return this.commentModel.deleteMany({ articleId: Types.ObjectId(articleId) }).exec();
  }
}
