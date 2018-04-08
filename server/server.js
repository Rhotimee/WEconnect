import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import YAML from 'yamljs';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import index from './routes/v1/index';

const app = express();

// React
if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler));
}
app.use(express.static(path.join(__dirname, '../client')));

// API Docs
const swaggerDocument = YAML.load(`${process.cwd()}/server/swagger.yaml`);

app.use(cors({ credentials: true, origin: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Port
const port = process.env.PORT || '3000';
app.set('port', port);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', index);

app.use('*', (request, response) => {
  response.sendFile(path.join(__dirname, '../client/index.html'));
});

/**
 * Listen on provided port
 */
app.listen(port);

export default app;
