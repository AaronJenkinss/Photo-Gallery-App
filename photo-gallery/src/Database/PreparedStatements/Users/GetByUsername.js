import Database from "@/Database/SQLite/SQLite";

const preparedStatement = Database.prepare(`
    SELECT * FROM Users
    WHERE username=?;
`);

const getByUsername = (username) => {
    return preparedStatement.get(username);
};

export default getByUsername;