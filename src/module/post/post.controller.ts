import { PostService } from "@module/post/post.service";
import { SuccessOk } from "@shared/response/success/success.response";
import { Request, Response } from "express";

import {
  createPostException,
  deletePostException,
  getPostByIdException,
  getPostsException,
  updatePostException
} from "./post.exception";

class PostController {
  postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  getPosts = async (request: Request, response: Response) => {
    try {
      const resultGetPosts = await this.postService.getPosts();
      SuccessOk(response, resultGetPosts);
    } catch (error: unknown) {
      getPostsException(error);
    }
  };

  getPostById = async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id);

    try {
      const resultGetPosts = await this.postService.getPostById(id);
      SuccessOk(response, resultGetPosts);
    } catch (error: unknown) {
      getPostByIdException(id, error);
    }
  };

  createPost = async (request: Request, response: Response) => {
    const postInput = request.body;

    try {
      const resultCreatedPost = await this.postService.createPost(postInput);
      SuccessOk(response, resultCreatedPost);
    } catch (error: unknown) {
      createPostException(error);
    }
  };

  updatePost = async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id);
    const postInput = request.body;
    postInput.id = id;

    try {
      await this.postService.getPostById(id);
      const resultUpdatePost = await this.postService.updatePost(postInput);
      SuccessOk(response, resultUpdatePost);
    } catch (error: unknown) {
      updatePostException(id, error);
    }
  };

  deletePost = async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id);

    try {
      await this.postService.getPostById(id);
      const resultDeletePost = await this.postService.deletePost(id);
      SuccessOk(response, { postId: resultDeletePost });
    } catch (error: unknown) {
      deletePostException(id, error);
    }
  };
}

export { PostController };
