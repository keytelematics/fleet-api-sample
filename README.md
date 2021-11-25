# fleet-api-sample
A reference application for making use of the Key Telematics Fleet API.

## Setup

Create the database first by running the database create script in the `scripts` directory.


# Environment variables

This project makes use of `dotenv` and requires a `.env` file in the root of the project with the following variables to load from

| VARIABLE    | DESCRIPTION                                                                 | VALUE                    |
|-------------|-----------------------------------------------------------------------------|--------------------------|
| KEY_API_KEY | The api key to auth api calls, given in the request header with `x-api-key` | (generated)              |
| KEY_HOST    | The KeyTelematics api host to make request to.                              | https://api.stage.kt1.io |
|             |                                                                             |                          |

## Authentication

- API Key (x-api-key)
- Access Token (x-access-token or jwttoken)

## Database

The default database is `sqlite` that is created on project startup (first run) to store data downloaded through api for demo purposes.


SQLite
Get entities for whats downloaded

table for telemetry, events, assets , device

fleet api
add good handling for throttling



