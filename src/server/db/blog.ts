import { Connection } from "./index";

const all = () => Connection( "SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid" );

const one = (id: number) => Connection( "SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid WHERE blogs.id = ?", [id] );

const destroy = (id: number) => Connection("DELETE FROM blogs WHERE id = ?", [id]);

const insert = (authorid: number, title: string, content: string) =>
  Connection("INSERT INTO blogs (authorid, title, content) VALUE (?, ?, ?)", [authorid, title, content]);

const update = (content: string, title: string, id: number) =>
  Connection("UPDATE blogs SET content = ?, title = ? WHERE id =? ", [content, title, id]);

export default {
  all,
  one,
  destroy,
  insert,
  update
};

//[id] is an escape parameter which prevents users/hackers from direct access to ? id in mysql
