import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Types, disconnect } from 'mongoose';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';

const commentId = new Types.ObjectId().toHexString();

const date = new Date();

const testDto: CreateCommentDto = {
	name: 'Test',
	createdAt: date,
	bodyComment: 'Текст комментария',
	commentId
};

describe('AppController (e2e)', () => {
	let app: INestApplication;
	let createdId: string;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/comment/create (POST)', async (done) => {
	return request(app.getHttpServer())
	.post('/comment/create')
	.send(testDto)
	.expect(201)
	.then(({ body }: request.Response) => {
		createdId = body._id;
		expect(createdId).toBeDefined();
		done();
	});
  });

//   it('/comment/byArticle/:articleId (GET)', async (done) => {
// 	return request(app.getHttpServer())
// 		.get('/comment/byArticle/' + createdId)
// 		.expect(200)
// 		.then(({ body }: request.Response) => {
// 			expect(body.length).toBe(1);
// 			done();
// 		});
//   });

  it('/comment/:id (DELETE)', () => {
	return request(app.getHttpServer())
		.delete('/comment/' + createdId)
		.expect(200);
  });

  afterAll(() => {
	disconnect();
  });
});
