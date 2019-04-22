import express from 'express';
import compression from 'compression';
import path from 'path';
import cors from 'cors';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import { xssProtection } from 'lusca';
import { Response, Request, NextFunction } from 'express';
import logger from './util/logger';
import morgan from 'morgan';
// Controllers
import apiController from './controllers/api.controller';

// Create Express server
const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'twig');

app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(xssProtection(true));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// App routes
app.get('/', function(req: Request, res: Response) {
  res.render('index', { title: 'Express - TS' });
});

// API routes
app.use('/api', apiController);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
