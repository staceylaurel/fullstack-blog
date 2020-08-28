import { Connection } from "./index";

const insert = (name: string, amount: number) =>
  Connection("INSERT INTO blogs (name, amount) VALUE (?, ?, ?)", [name, amount]);



export default {
 
  insert,

};