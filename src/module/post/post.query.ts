export const POST_QUERY = {
  SELECT_POST: "SELECT id, title, author, content FROM post",
  CREATE_POST: "INSERT INTO post (title, author, content) VALUES (?, ?, ?)",
  SELECT_POST_BY_ID: "SELECT id, title, author, content FROM post WHERE id=?",
  UPDATE_POST_BY_ID: "UPDATE post SET title=?, author=?, content=? WHERE id=?",
  DELETE_POST_BY_ID: "DELETE FROM post WHERE id=?"
};
