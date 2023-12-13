import { NotFound } from "@shared/error/client.error";
import { InternalServeError } from "@shared/error/server.error";

const getPostsException = (error: unknown) => {
  throw new InternalServeError(error);
};

const getPostByIdException = (postId: number, error: unknown) => {
  if (error instanceof NotFound) {
    throw new NotFound(`The post with the id "${postId}" not found.`);
  } else {
    throw new InternalServeError(error);
  }
};

const createPostException = (error: unknown) => {
  throw new InternalServeError(error);
};

const updatePostException = (postId: number, error: unknown) => {
  if (error instanceof NotFound) {
    throw new NotFound(`The post with the id "${postId}" not found.`);
  } else {
    throw new InternalServeError(error);
  }
};

const deletePostException = (postId: number, error: unknown) => {
  if (error instanceof NotFound) {
    throw new NotFound(`The post with the id "${postId}" not found.`);
  } else {
    throw new InternalServeError(error);
  }
};

export {
  createPostException,
  deletePostException,
  getPostByIdException,
  getPostsException,
  updatePostException
};
