import Student from '../models/Students';

class StudentController {
  async store(req, res) {
    const studentExist = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExist) {
      return res.status(400).json({ error: 'Student already exists' });
    }

    const { id, nome, email, idade, peso, altura } = await Student.create(
      req.body
    );

    return res.json({
      id,
      nome,
      email,
      idade,
      peso,
      altura,
    });
  }
}

export default new StudentController();
