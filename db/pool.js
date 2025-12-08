const pg = require('pg');
let pool;
try {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL
    })

} catch (error) {
    console.log(error);
}

module.exports = { pool };