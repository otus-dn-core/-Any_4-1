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

export class TopPageModel {
	_id: string;
  firstLevelCategory: TopPageMenu;
  title: string;
  articles: {
	image: string;
	title: string;
	bodyAnons: string;
	datePublication: Date;
  }[];
}
