import knex from "knex";

// Knex instance to sqlite db
export const sql = knex({
    client: 'sqlite3',
    connection: {
        filename: "./sampledb.sqlite"
    },
    useNullAsDefault: true
});
