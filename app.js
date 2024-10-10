const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./config/database');

const app = express();


app.use(bodyParser.json());


app.use('/api', productRoutes);


sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
