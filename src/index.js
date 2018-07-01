const path = require('path');
const dotenv = require('dotenv');
const db = require(path.join(__dirname, '..', 'models', 'index.js'));

dotenv.config();

db.sequelize
  .sync()
  .then(() => {
    console.log('Complete!');
    process.exit();
  });
