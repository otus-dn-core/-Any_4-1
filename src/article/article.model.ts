import { Prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface ArticleModel extends Base {}
export class ArticleModel extends TimeStamps {
  @Prop({ unique: true })
  urlSynonym: string;

  @Prop()
  image: string[];

  @Prop()
  title: string;

  @Prop()
  subtitile: string;

  @Prop()
  bodyAnons: string;

  @Prop()
  bodyText: string;

  @Prop()
  datePublication: Date;

  @Prop()
  dateUpdate: Date;

  @Prop()
  publication: true;

  @Prop()
  author: string;

  @Prop({ type: () => [String] })
  metaTags: string[];

  @Prop()
  commentNumber: number;

  @Prop()
  blockInfo: true;

  @Prop()
  position: string;

  @Prop({ type: () => [String] })
  rubric: string[];
}
