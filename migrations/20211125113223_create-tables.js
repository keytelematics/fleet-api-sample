
exports.up = function (knex) {
    return knex.schema
        .createTable('data', (tbl) => {
            tbl.increments()
            tbl.json('json_data')
            tbl.text('type', 20)
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('data');
};
