
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
        })
        .createTable('events', (tbl) => {
            tbl.text('id', 128)
            tbl.text('ownerId', 128)
            tbl.text('ownerName', 128)
            tbl.text('originId', 128)
            tbl.text('date', 128)
            tbl.text('eventDate', 128)
            tbl.text('creationDate', 128)
            tbl.text('revoked', 128)
            tbl.text('eventClass', 128)
            tbl.text('eventType', 128)
            tbl.text('assetId', 128)
            tbl.text('assetName', 128)
        })
        .createTable('telemetry', (tbl) => {
            tbl.text('originId', 128)
            tbl.text('ownerId', 128)
            tbl.text('date', 40)
            tbl.text('received', 40)
            tbl.text('priority', 3)
            tbl.text('eventId', 3)
            tbl.text('ignition', 3)
            tbl.text('moving', 3)
            tbl.text('motion_end', 3)
            tbl.text('gsm_signal', 3)
            tbl.text('battery_perc', 3)
            tbl.text('driving', 3)
            tbl.text('trip', 3)
            tbl.text('movement', 3)
            tbl.text('assetId', 128)
            tbl.text('assetName', 128)
        })
        .createTable('trips', (tbl) => {
            tbl.text('id', 128)
            tbl.text('ownerId', 128)
            tbl.text('assetId', 128)
            tbl.text('tripType', 40)
            tbl.text('dateStart', 128)
            tbl.text('dateEnd', 128)
            tbl.text('records', 128)
            tbl.text('assetName', 128)
            tbl.text('driveTime', 128)
            tbl.text('idleTime', 128)
            tbl.text('distance', 128)
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('devices')
        .dropTableIfExists('assets')
        .dropTableIfExists('events')
        .dropTableIfExists('telemetry')
        .dropTableIfExists('trips');
};
