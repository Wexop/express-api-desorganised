import db from "../database/database.js";

export const getProducts = (callback) => {
    return db.all('SELECT * FROM products', (err, rows) => {
        if (err) {
            console.error(err.message);
            callback(undefined, err)
        } else {
            callback(rows, undefined)
        }
    });
}
