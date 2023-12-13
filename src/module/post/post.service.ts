import { MySqlPool } from "@database/mysql/mysql.config";
import { IPostCreate, IPostService, IPostUpdate } from "@module/post/post.interface";
import { NotFound } from "@shared/error/client.error";
import { FieldPacket, ResultSetHeader, RowDataPacket } from "mysql2";
import { format } from "sqlstring";

import {
  createPostException,
  deletePostException,
  getPostByIdException,
  getPostsException,
  updatePostException
} from "./post.exception";
import { POST_QUERY } from "./post.query";

type ResultSet = [RowDataPacket[] | RowDataPacket[][] | ResultSetHeader, FieldPacket[]];

class PostService implements IPostService {
  async getPosts() {
    try {
      const pool = await MySqlPool();
      const rawSql: string = POST_QUERY.SELECT_POST;
      const resultGetPosts: ResultSet = await pool.query(rawSql);
      return resultGetPosts[0];
    } catch (error: unknown) {
      getPostsException(error);
    }
  }

  async getPostById(postId: number) {
    try {
      const pool = await MySqlPool();
      const rawSql: string = POST_QUERY.SELECT_POST_BY_ID;
      const placeholder: Array<number> = [postId];
      const sqlFormat: string = format(rawSql, placeholder);
      console.log(`SQL : getPostById : ${sqlFormat}`);
      const resultPoolQuery: ResultSet = await pool.query(sqlFormat);
      if ((resultPoolQuery[0] as Array<any>).length > 0) {
        const [resultGetPostById]: any = (resultPoolQuery[0] as Array<any>).flat();
        return resultGetPostById;
      } else {
        throw new NotFound();
      }
    } catch (error: unknown) {
      getPostByIdException(postId, error);
    }
  }

  async createPost(post: IPostCreate) {
    try {
      const pool = await MySqlPool();
      const rawSql = POST_QUERY.CREATE_POST;
      const placeholder = [post.title, post.author, post.content];
      const sqlFormat: string = format(rawSql, placeholder);
      console.log(`SQL : createPost : ${sqlFormat}`);
      const resultCreatePost: ResultSet = await pool.query(sqlFormat);
      return { id: (resultCreatePost[0] as ResultSetHeader).insertId, ...post };
    } catch (error: unknown) {
      createPostException(error);
    }
  }

  async updatePost(post: IPostUpdate) {
    const { id, title, author, content } = post;

    try {
      const pool = await MySqlPool();
      const rawSql = POST_QUERY.UPDATE_POST_BY_ID;
      const placeholder = [title, author, content, id];
      const sqlFormat: string = format(rawSql, placeholder);
      console.log(`SQL : updatePost : ${sqlFormat}`);
      const resultUpdatePost: ResultSet = await pool.query(sqlFormat);
      console.log(`SQL : affectedRows : ${(resultUpdatePost[0] as ResultSetHeader).affectedRows}`);
      return post;
    } catch (error: unknown) {
      updatePostException(id, error);
    }
  }

  async deletePost(postId: number) {
    try {
      const pool = await MySqlPool();
      const rawSql = POST_QUERY.DELETE_POST_BY_ID;
      const placeholder = [postId];
      const sqlFormat: string = format(rawSql, placeholder);
      console.log(`SQL : deletePost : ${sqlFormat}`);
      const resultUpdatePost: ResultSet = await pool.query(sqlFormat);
      console.log(`SQL : affectedRows : ${(resultUpdatePost[0] as ResultSetHeader).affectedRows}`);
      return { id: postId, message: "post deleted" };
    } catch (error: unknown) {
      deletePostException(postId, error);
    }
  }
}

export { PostService };
