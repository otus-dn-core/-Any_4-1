import { Prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopPageMenu {
	news,
	obshestvo,
	politic,
	economic,
	culture,
	sport,
	heal,
	holiday,
	paper
}

export class Articles {
  @Prop()
  image: string;

  @Prop()
  title: string;

  @Prop()
  bodyAnons: string;

  @Prop()
  datePublication: Date;
}

export interface TopPageModel extends Base {}
export class TopPageModel extends TimeStamps {
  @Prop({ enum: TopPageMenu })
  firstLevelCategory: TopPageMenu;

  @Prop()
  title: string;

  @Prop({ type: () => [Articles]})
  articles: Articles[];
}
