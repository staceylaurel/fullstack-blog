import { Connection } from "./index";

const destroy = (blogid: number) => Connection("DELETE FROM blogtags WHERE blogid = ?", [blogid]);

const insert = (blogid: number, tagid: number) => Connection("INSERT INTO blogtags (blogid, tagid) VALUE (?, ?)", [blogid, tagid]);

const thisTags = (blogid: number) => Connection("SELECT tags.name FROM blogtags JOIN tags ON tags.id = blogtags.tagid WHERE blogtags.blogid = ?", [blogid]);


export default {
    destroy, 
    insert, 
    thisTags,
  };