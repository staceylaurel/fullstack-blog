import { Connection } from "./index";

const insert = (name: string, subject: string, message: string) =>
  Connection("INSERT INTO blogs (name, subject, message) VALUE (?, ?, ?)", [name, subject, message]);



export default {
 
  insert,

};