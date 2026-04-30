export type BlogType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type NewBlogType = Omit<BlogType, 'userId' | 'id'>;
