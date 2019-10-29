import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/student', StudentController.store);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

export default routes;
