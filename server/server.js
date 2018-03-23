import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import YAML from 'yamljs';
import index from './routes/v1/index';

const app = express();

// API Docs
const swaggerDocument = YAML.load(`${process.cwd()}/server/swagger.yaml`);

app.use(cors({ credentials: true, origin: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || '3000';
app.set('port', port);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);

// catch 404 and forward to error handler
app.use((request, response, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use((error, request, response, next) => {
  // set locals, only providing error in development
  response.locals.message = error.message;
  response.locals.error = request.app.get('env') === 'development' ? error : {};

  // render the error
  response.status(error.status || 500);
  response.json({
    error: response.locals.error || error.message,
    message: response.locals.message || error.status,
  });
  next();
});

/**
 * Listen on provided port
 */
app.listen(port);

export default app;
