import Sequelize from 'sequelize';

import Student from '../app/models/Students';

import dataBaseConfig from '../config/database';

const models = [Student];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
