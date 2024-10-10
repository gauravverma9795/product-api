const sequelize = require('../config/database');
const Product = require('./product');

sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log('Error syncing database: ', err));

module.exports = { Product };
