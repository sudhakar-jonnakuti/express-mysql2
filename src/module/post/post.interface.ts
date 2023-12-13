interface IPost {
  title: string;
  author: string;
  content: string;
}

interface IPostCreate extends IPost {
  id?: number;
}

interface IPostUpdate extends IPost {
  id: number;
}

interface IPostService {
  getPosts(): any;
  getPostById(postId: number): any;
  createPost(post: IPostCreate): any;
  updatePost(post: IPostUpdate): any;
  deletePost(postId: number): any;
}

export { IPost, IPostCreate, IPostService, IPostUpdate };
