
import express from 'express';
import path from 'path';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// dynamically include all controllers
const ctrlPath = path.join(__dirname, './controllers/');
fs
  .readdirSync(ctrlPath)
  .filter(file => (file.slice(-3) === '.js'))
  .forEach(async file => {
    await require(path.join(ctrlPath, file))(app);
    LOGGER('controller', `${path.basename(file, '.js')}`, 'success');
  });

export default app;
