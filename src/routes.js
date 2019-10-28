import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/student', StudentController.store);

routes.post('/users', UserController.store);

export default routes;
