import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("alerts.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    /**Alert table creation
     * Use SQLite
     * This file will be execute when app started
     */
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS alerts (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);",
        [],
        /**Success
         * This function will be executed when the table creation will be successful
         */
        () => {
          resolve();
        },
        /**Error
         * This function will be executed when there will be errow in creating the table
         */
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

/**Insert Data in our created table
 *
 * @param {*} title
 * @param {*} description
 * @param {*} address
 * @param {*} lat
 * @param {*} lng
 * @returns
 */
export const insertAlert = (title, description, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    /**Alert table creation
     * Use SQLite
     * This file will be execute when app started
     */
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO alerts (title, description, address,lat, lng) VALUES(?, ?, ?, ?, ?)`,
        [title, description, address, lat, lng],
        /**Success
         * This function will be executed when the table creation will be successful
         */
        (_, result) => {
          resolve(result);
        },
        /**Error
         * This function will be executed when there will be errow in creating the table
         */
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
/**
 * From the the database this function
 * @returns all alert by their Ids
 */
export const fetchAlerts = () => {
  const promise = new Promise((resolve, reject) => {
    /**Alert table creation
     * Use SQLite
     * This file will be execute when app started
     */
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT *  FROM alerts WHERE id",
        [],
        /**Success
         * This function will be executed when the table creation will be successful
         */
        (_, result) => {
          resolve(result);
        },
        /**Error
         * This function will be executed when there will be errow in creating the table
         */
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
