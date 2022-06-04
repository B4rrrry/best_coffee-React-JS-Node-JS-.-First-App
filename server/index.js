require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleWare');
const path = require('path'); 

const PORT = process.env.PORT || 5000;
const app = express();


app.use(cors()); //передаем корс
app.use(express.json()); //Даем возможность парсить джсон
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use('/api', router); // Даем доступ к нашим роутерам при вызове через /api
// В самом конце
app.use(errorHandler);

//Запуск сервера
const start = async () => {
  try {
    await sequelize.authenticate();
    sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
  } catch (e) {
    console.log(e)
  }
}

start();