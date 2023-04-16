export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch: string;
  category: Category;
  publishedAt: string;
};

export type Category = {
  id: string;
  name: string;
};
