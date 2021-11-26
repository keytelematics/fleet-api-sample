# fleet-api-sample
A reference application for making use of the Key Telematics Fleet API.

# Setup

## Step 1

To create the local `sqlite` database, run the `create-database.js` file in the root of the project with the following command:
```
node create-database.js
```

This will create the database in the root of the project called `sampledb.sqlite`, then the `knex` migrations up to the latest migration wil be run last and create the needed tables.

## Step 2

This project makes use of `dotenv` and requires a `.env` file in the root of the project with the following variables to load from

| VARIABLE    | DESCRIPTION                                                                 | VALUE                    |
|-------------|-----------------------------------------------------------------------------|--------------------------|
| KEY_API_KEY | The api key to auth api calls, given in the request header with `x-api-key` | text                      |
| KEY_HOST    | The KeyTelematics api host to make request to.                              | https://api.stage.kt1.io |
| OWNER_ID    | The id of the company that owns the devices and assets                      | Guid                   |
| USERNAME    | The username of a user to login with for authentication                     | text                     |
| PASSWORD    | The password of the username to login with for authentication               | text                     |

## Step 3

To run the project run the following command:
```
npm run serve
```

This will start the project up with `nodemon` on port `5000`. The project will start up and do the following:

1. Load up environment variables specified in the `.env` file.
2. Create the `knex` instance to the `sqlite` database.
3. Login to the KeyTelematics api to retrieve access tokens for the user specified in the `.env`.
4. Setup a basic endpoint with `express server`. 
5. Start fetching data from the KeyTelematics Fleet-Api.
6. Insert fetched data into the `sqlite` database.
7. The node app is now running and the basic `express` endpoint can be hit to view a summary of the data that was pulled from the api.

