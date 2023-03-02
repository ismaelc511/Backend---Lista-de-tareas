// Tener variables ej: ususario, nom base de datos
import { config as dotenv } from "dotenv";
dotenv();

console.log(process.env.NICKNAME)

export const configBD ={
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE|| 'gestortareas'
}