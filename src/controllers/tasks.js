import { connect } from "../database";

export const getTasks = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tarea");
    res.json(rows);
};
export const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tarea WHERE id = ?", [
        req.params.id,
    ]);
    res.json(rows[0]);
};
export const getTaskCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(*) FROM tarea");
    res.json(rows[0]["COUNT(*)"]);
};

export const saveTask = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query(
        "INSERT INTO tarea(idUsuarioPropietario,idUsuarioAsignado,nombre,descripcion,Fecha,fechaEstimadaFinalizacion,fechaDeEdicion,idEstado,idPrioridad,idCategoria) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
            req.body.idUsuarioPropietario,
            req.body.idUsuarioAsignado,
            req.body.nombre,
            req.body.descripcion,
            req.body.Fecha,
            req.body.fechaEstimadaFinalizacion,
            req.body.fechaDeEdicion,
            req.body.idEstado,
            req.body.idPrioridad,
            req.body.idCategoria,
        ]
    );
    res.json({
        id: result.insertId,
        ...result.body,
    });
};

export const deleteTask = async (req, res) => {
    const connection = await connect();
    await connection.query("DELETE FROM tarea WHERE id = ?", [req.params.id]);
    res.sendStatus(204);
};
export const updateTask = async (req, res) => {
    const connection = await connect();
    await connection.query("UPDATE tarea SET ? WHERE id =?", [
        req.body,
        req.params.id,
    ]);
    res.sendStatus(200);
};
