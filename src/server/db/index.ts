import * as mysql from "mysql";
import blogs from "./blog";
import blogtags from "./blogtags";
import config from "../config";
import authors from "./authors"

const pool = mysql.createPool(config.mysql);

export const Connection = <Connection = any>(
  mysql: string,
  values?: any
) => {
  return new Promise<Connection>((resolve, reject) => {
    pool.query(mysql, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

export default {
  blogs,
  blogtags, 
  authors
};