import { Connection } from "./index";

const find = (column: string, value: string | number) =>
  Connection("SELECT * FROM authors WHERE ?? = ?", [column, value]);

export default {
  find,
};

// the ?? is an escape placeholder for column names
// the ? is the same escape character you've used for values!