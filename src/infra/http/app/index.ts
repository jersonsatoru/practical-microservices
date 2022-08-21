import express, { Express } from 'express';
import { Settings } from '../../settings';
import { mountMiddlewares } from '../middlewares';
import { mountRoutes } from '../routes';

export function createApp({ config, env }: Settings): Express {
  const app = express();
  mountRoutes(app, env);
  mountMiddlewares(app, config);
  return app;
}
