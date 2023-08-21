const SQLite = require('sqlite3').verbose();

const db = new SQLite.Database('file.db');

db.serialize(() => {

});

