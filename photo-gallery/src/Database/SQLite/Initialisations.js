

const Initialisations = () => {

};

const initialiseTables = (db) => {
    db.run(`CREATE TABLE IF NOT EXISTS Collections(
        id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,

        title VARCHAR(100) NOT NULL DEFAULT \"Untitled\",
        description VARCHAR(1000) NOT NULL DEFAULT \"No description was provided.\",
        count INT NOT NULL DEFAULT 0,
        dateCreated DATETIME NOT NULL,
        lastUpdated DATETIME NOT NULL,

        PRIMARY KEY (id),
        FOREIGN KEY (user_id) REFERENCES Users(id)
    );`);

    db.run(`CREATE TABLE IF NOT EXISTS Users(
        id INT NOT NULL AUTO_INCREMENT,

        username VARCHAR(100) NOT NULL,
        pfp TEXT NOT NULL,
        dateJoined DATETIME NOT NULL,

        imagesCount INT NOT NULL DEFAULT 0,
        collectionsCount INT NOT NULL DEFAULT 0,

        PRIMARY KEY (id)
    );`);

    db.run(`CREATE TABLE IF NOT EXISTS Images(
        id INT NOT NULL AUTO_INCREMENT,
        user_id INT NOT NULL,

        title VARCHAR(100) NOT NULL DEFAULT \"UNTITLED\",
        description VARCHAR(1000) NOT NULL DEFAULT \"No description was provided.\",
        dateUploaded DATETIME NOT NULL,
        lastUpdated DATETIME NOT NULL,

        PRIMARY KEY (id),
        FOREIGN KEY (user_id) REFERENCES Users(id)
    );`);

    db.run(`CREATE TABLE IF NOT EXISTS ImageCollections(
        collection_id INT NOT NULL,
        image_id INT NOT NULL,

        FOREIGN KEY (collection_id) REFERENCES Collections(id),
        FOREIGN KEY (image_id) REFERENCES Images(id)
    );`);
};

export default Initialisations;