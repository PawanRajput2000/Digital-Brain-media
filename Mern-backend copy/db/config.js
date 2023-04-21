const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('todoApp', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('user', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Task = sequelize.define('task', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('done', 'pending', 'in progress', 'completed'),
    defaultValue: 'pending',
  },
});

module.export = User.hasMany(Task, { onDelete: 'CASCADE' });
module.export = Task.belongsTo(User);
