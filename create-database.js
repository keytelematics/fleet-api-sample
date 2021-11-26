const Knex = require('knex')
const sqlite3 = require('sqlite3')

const databaseName = 'sampledb.sqlite'
 
async function main() {
  let dbCreate = new sqlite3.Database(databaseName, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if(!err){
       console.log("Successfully created sqlite database");
    } else {
        console.log("Failed to create sqlite database", err);
    }
 });

  // Now that our database is known, let's create another knex object
  // with database name specified so that we can run our migrations
  let knex = Knex({
    client: 'sqlite3',
    connection: {
        filename: "./sampledb.sqlite"
    }
  })

  // Now we can happily run our migrations
  await knex.migrate.latest()

  // Done!!
}

main().catch(console.log).then(process.exit)