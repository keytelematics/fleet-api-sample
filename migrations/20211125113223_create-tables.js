
exports.up = function (knex) {
    return knex.schema
        .createTable('assets', (tbl) => {
            tbl.text('id', 128)
            tbl.text('name', 128)
            tbl.text('state', 128)
            tbl.text('deviceId', 128) 
            tbl.text('ownerId', 128)
            tbl.text('costCentreId', 128)
        })
        .createTable('devices', (tbl) => {
            tbl.text('id', 128)
            tbl.text('name', 128)
            tbl.text('state', 128)
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('devices')
        .dropTableIfExists('assets');
};
