import axios, { type AxiosResponse } from 'axios';
import type { BlogType, NewBlogType } from '@/types/blog-type';

const apiBlog = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

export const fetchBlogs = async () => {
  const { data }: AxiosResponse<BlogType[]> = await apiBlog.get('/posts');
  return data;
};

export const createBlog = async (newPost: NewBlogType) => {
  const { data }: AxiosResponse<BlogType> = await apiBlog.post('/posts', newPost);
  return data;
};
