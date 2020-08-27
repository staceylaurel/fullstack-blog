import { Connection } from "./index";

const find = (column: string, value: string | number) =>
  Connection("SELECT * FROM authors WHERE ?? = ?", [column, value]);

const insert = (newAuthor: { name: string; email: string; password: string }) =>
  Connection("INSERT INTO authors SET ?", newAuthor);

export default {
  find,
  insert,
};

// the ?? is an escape placeholder for column names
// the ? is the same escape character you've used for values!
