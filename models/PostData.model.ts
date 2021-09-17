export interface PostData {
  title: string;
  date: string;
  contentHtml: string;
  id?: string;
}

export interface AllPostsData {
  allPostsData: PostData[];
}
