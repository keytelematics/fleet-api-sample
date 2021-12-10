import knex from "knex";

// Knex instance to sqlite db
export const sql = knex({
    client: 'sqlite3',
    connection: {
        filename: "./sampledb.sqlite"
    },
    useNullAsDefault: true
});

export const deleteEntity = async (data: any) => {
    // doc type not known here, trying to set state to delete on all tables where it would match by id
    console.log('trying to delete from assets table with id', data.id);
    await sql('assets')
        .where({ id: data.id })
        .update({ state: 'deleted' });

    console.log('trying to delete from devices table with id', data.id);
    await sql('devices')
        .where({ id: data.id })
        .update({ state: 'deleted' });
}

export const createOrUpdateEntity = async (type: string, data: any) => {
    // More entities can be added in the function along with more tables as more entities are needed
    switch (type) {
        case 'asset':
            await sql('assets')
                .insert(data)
                .onConflict('id')
                .merge();
            break;
        case 'device':
            await sql('devices')
                .insert(data)
                .onConflict('id')
                .merge();
            break;
        default:
            console.log('Entity unknown, added to switch to handle this entity')
    }
};

export const getLatestTelemetry = async () => {
    const data = await Promise.all((await sql
        .select({
            assetName: 'assets.name',
            deviceSerial: 'devices.name',
            date: 'telemetry_latest.date',
            lon: 'telemetry_latest.lon',
            lat: 'telemetry_latest.lat',
            speed: 'telemetry_latest.speed',
            address: 'telemetry_latest.address'
        })
        .from('telemetry_latest')
        .join('assets', 'telemetry_latest.assetId', 'assets.id')
        .join('devices', 'assets.id', 'devices.assetId')).map(async telem => {

            return {
                assetName: telem.assetName,
                deviceSerial: telem.deviceSerial,
                date: telem.date,
                lon: telem.lon,
                lat: telem.lat,
                speed: telem.speed,
                address: telem.address,
            };
        }));
        return data;
}