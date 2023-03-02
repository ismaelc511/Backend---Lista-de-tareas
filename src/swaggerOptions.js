// Configuración del módulo de documentación Swagger


export const options = {
    definition:{
        info:{
            title: 'Task Manager API',
            version: '1.0.0'
        }
    },
    apis: ["./src/routes/**/*.js"]
}