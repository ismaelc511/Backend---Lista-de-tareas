import{Router} from 'express';
import {createUser,getUsers} from '../controllers/users'

/**
 * @swagger
 * tags:
 *  name: users
 */
const router = Router();

/**
 * @swagger
 * /users:
 *  get:
 *   summary:get all users
 *   tags:[users
 */
router.get('/users', getUsers)


/**
 * @swagger
 * /users:
 *  post:
 *   summary:create a new user
 *   tags:[users]
 */
router.post('/users',createUser)