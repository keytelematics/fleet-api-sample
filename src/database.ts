import knex from 'knex';

const sql = knex({
    client: 'sqlite3',
    connection: {
        filename: "./src/data/sampledb.sqlite"
    }
});

export const insert = (type: string, data: any) => {
    return sql(type).insert(data);
}

export const get = (type: string) => {
    return sql('data').select().where({ type });
}
