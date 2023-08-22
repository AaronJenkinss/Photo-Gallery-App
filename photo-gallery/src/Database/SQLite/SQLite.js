import SQLite from 'better-sqlite3';
import Initialisations from './Initialisations';

const db = new SQLite('file.db', {})
db.pragma('journal_mode = WAL');

Initialisations(db);

process.on('exit', () => db.close());
process.on('SIGHUP', () => process.exit(128 + 1));
process.on('SIGINT', () => process.exit(128 + 2));
process.on('SIGTERM', () => process.exit(128 + 15));

const Database = db;
export default Database;