const initialiseDataTables = (db) => {
    db.exec(`CREATE TABLE IF NOT EXISTS Collections(
        id INT NOT NULL,
        user_id INT NOT NULL,

        title VARCHAR(100) NOT NULL DEFAULT "Untitled",
        description VARCHAR(1000) NOT NULL DEFAULT "No description was provided.",
        count INT NOT NULL DEFAULT 0,
        dateCreated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        lastUpdated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

        PRIMARY KEY (id),
        FOREIGN KEY (user_id) REFERENCES Users(id)
    );`);

    db.exec(`CREATE TABLE IF NOT EXISTS Users(
        id INT NOT NULL,

        username VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,

        pfp INT,
        dateJoined DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

        imagesCount INT NOT NULL DEFAULT 0,
        collectionsCount INT NOT NULL DEFAULT 0,

        PRIMARY KEY (id),
        FOREIGN KEY (pfp) REFERENCES Images(id)
    );`);

    db.exec(`CREATE TABLE IF NOT EXISTS Images(
        id INT NOT NULL,
        user_id INT NOT NULL,

        filePath VARCHAR(100) NOT NULL,

        title VARCHAR(100) NOT NULL DEFAULT "UNTITLED",
        description VARCHAR(1000) NOT NULL DEFAULT "No description was provided.",
        dateUploaded DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        lastUpdated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

        PRIMARY KEY (id),
        FOREIGN KEY (user_id) REFERENCES Users(id)
    );`);

    db.exec(`CREATE TABLE IF NOT EXISTS ImageCollections(
        collection_id INT NOT NULL,
        image_id INT NOT NULL,

        FOREIGN KEY (collection_id) REFERENCES Collections(id),
        FOREIGN KEY (image_id) REFERENCES Images(id)
    );`);
};

const initialiseSessionTables = (db) => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS Sessions (
            id VARCHAR(36) NOT NULL,
            data TEXT,

            PRIMARY KEY (id)
        );
    `);

    db.exec(`
        CREATE TABLE IF NOT EXISTS UserSessions (
            session_id VARCHAR(36) NOT NULL,
            user_id INT NOT NULL,

            FOREIGN KEY (session_id) REFERENCES Sessions(id),
            FOREIGN KEY (user_id) REFERENCES Users(id)
        );
    `);
};

const Initialisations = (db) => {
    initialiseDataTables(db);
    initialiseSessionTables(db);
};

export default Initialisations;