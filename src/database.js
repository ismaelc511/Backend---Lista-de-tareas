//Archivo con la conexión a base de datos

import mysql from 'mysql2/promise'
import {configBD} from './config'

export const connect = async () => {

    return await mysql.createConnection(configBD);

}

connect();