import { connect } from '../database'



export const getUsers = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM usuario")
    console.log(rows);
    res.json(rows);
}

export const createUser = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query("INSERT INTO usuario(id,idTipoUsuario,nombre,password,email) VALUES (?, ?, ?, ?, ?)", [req.body.id, req.body.idTipoUsuario,req.body.nombre, req.body.password, req.body.email, req.body.email]);
    console.log(result);
}