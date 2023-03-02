// Las Rutas de los request con sus respectivos controladores

import{Router} from 'express';
import {getTasksCount, getTasks, getTask, saveTask, deleteTask, updateTask} from '../controllers/tasks'

/**
 * @swagger
 * tags:
 *  name: task
 */

const router = Router();
/**
 * @swagger
 * /task:
 *  get:
 *   summary:get all tasks
 *   tags:[task]
 */
router.get('/task', getTasks)

/**
 * @swagger
 * /task:
 *  get:
 *   summary:get count of tasks
 *   tags:[task] 
 */
router.get('/task/count', getTasksCount)

/**
 * @swagger
 * /task:
 *  get:
 *   summary:get one tasks
 *    tags:[task]
 */
router.get('/task/:id',getTask)

/**
 * @swagger
 * /task:
 *  post:
 *   summary:create task
 *    tags:[task]
 */
router.post('/task',saveTask)

/**
 * @swagger
 * /task:
 *  delete:
 *   summary:delete task
 *    tags:[task]
 */
router.delete('/task/:id',deleteTask)

/**
 * @swagger
 * /task:
 *  put:
 *   summary:update a task by id
 *    tags:[task]
 */
router.put('/task/:id',updateTask)

export default router