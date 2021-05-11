import { Prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface CommentModel extends Base {}
export class CommentModel extends TimeStamps {
  @Prop()
  name: string;

  @Prop()
  createdAt: Date;

  @Prop()
  bodyComment: string;
}
