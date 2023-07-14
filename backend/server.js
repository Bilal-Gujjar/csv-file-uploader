const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config/sequelize');
const dataRoutes = require('./routes/data');

const PORT = process.env.PORT || 5000;

app.use(cors());

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connected!');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

app.use('/api/data', dataRoutes);