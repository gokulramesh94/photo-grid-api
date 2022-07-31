import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { errorLogger, invalidPathHandler } from './middleware/ErrorHandler';
import { router } from './routes/index';

dotenv.config();

//Get Environment variables values
const MONGO_URI = process?.env?.MONGO_URI || '';
const PORT = process?.env?.PORT || 80;

const app = express();

//Enable cors
app.use(cors());
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb' }));

//Custom Routes
app.use('/api', router);

//Custom Error Handlers
app.use(errorLogger);
app.use(invalidPathHandler);

//Mongo connection
mongoose
  .connect(MONGO_URI)
  .then((response) => {
    console.log('mongoose connection response : ', response);
    console.log('listening on port : ', PORT);
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

export { app };
