import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('places.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql('CREATE TABLE IF NOT EXISTS places ( id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, long REAL NOT NULL); '
            ,[]
            , () => {
                resolve();
            }, (_, error) => {
                reject(error);
            });
        });
    });

    return promise;
};

export const insertPlace = (title, imageUri, address, lat, long) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                `INSERT INTO places (title, imageUri, address, lat, long) VALUES (?, ?, ?, ?, ?);`
            ,[title, imageUri, address, lat, long]
            , (_, result) => {
                resolve(result);
            }, (_, error) => {
                reject(error);
            });
        });
    });

    return promise;
};

export const fetchPlaces = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                `SELECT * FROM places;`
            ,[]
            , (_, result) => {
                resolve(result);
            }, (_, error) => {
                reject(error);
            });
        });
    });

    return promise;
}
