import { PostController } from "@module/post/post.controller";
import { Router } from "express";

class PostRoute {
  path = "/v1/post";
  router = Router();
  controller: PostController;

  constructor() {
    this.controller = new PostController();
    this.initRoute();
  }

  initRoute(): void {
    this.router.post(this.path, this.controller.createPost);
    this.router.get(this.path, this.controller.getPosts);
    this.router.get(`${this.path}/:id`, this.controller.getPostById);
    this.router.patch(`${this.path}/:id`, this.controller.updatePost);
    this.router.delete(`${this.path}/:id`, this.controller.deletePost);
  }
}

export { PostRoute };
