const { Pool } = require("pg");

const dbConfig = {
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "admin",
  port: 5432,
};

const pool = new Pool(dbConfig);

async function createDB() {
  try {
    const client = await pool.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
      );
    `);

    console.log("Database and table created successfully!");
    client.release(); // Release the client back to the pool
  } catch (error) {
    console.error("Error creating database and table:", error);
  } finally {
    pool.end();
  }
}

module.exports = createDB;
