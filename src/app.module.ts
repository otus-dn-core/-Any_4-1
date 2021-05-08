import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';
import { TopPageModule } from './top-page/top-page.module';

@Module({
	imports: [AuthModule, ArticleModule, CommentModule, TopPageModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
