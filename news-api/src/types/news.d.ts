export interface INews {
  totalResults: number;
  status: string;
  articles: IArticles[];
}

export interface IArticles {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}

export type Source = {
  id: any;
  name: string;
};
