import { Router } from "express";
import {
    deleteTask,
    getTask,
    getTaskCount,
    getTasks,
    saveTask,
    updateTask,
} from "../controllers/tasks";

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Task description
 */

const router = Router();

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get all tasks
 *      tags: [Tasks]  
 */

router.get("/tasks", getTasks);
/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get total task count
 *      tags: [Tasks]  
 *    
 */

router.get("/tasks/count", getTaskCount);

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Get a tasks by id
 *      tags: [Tasks]  
 */
router.get("/tasks/:id", getTask);
/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Create a tasks
 *      tags: [Tasks]  
 */

router.post("/tasks", saveTask);
/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: delete a task
 *      tags: [Tasks]  
 */

router.delete("/tasks/:id", deleteTask);
/**
 * @swagger
 * /tasks:
 *  put:
 *      summary: update a task
 *      tags: [Tasks]  
 */

router.put("/tasks/:id", updateTask);

export default router;
