import dotenv from 'dotenv'
dotenv.config()
import { Pool } from 'pg'

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT!, 10)
})


export default pool

