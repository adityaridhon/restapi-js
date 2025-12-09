import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const admindbPool = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER_ADMIN,
  password: process.env.DB_PASSWORD_ADMIN,
});

export const userdbPool = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER_USER,
  password: process.env.DB_PASSWORD_USER,
});
