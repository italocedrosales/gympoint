import { Router } from 'express';
import Student from './app/models/Students';

const routes = new Router();

routes.post('/store', async (req, res) => {
  const student = await Student.create({
    nome: 'Italo',
    email: 'italo.cedro@gmail.com',
    idade: 31,
    peso: 68,
    altura: 170,
  });

  return res.json(student);
});

export default routes;
