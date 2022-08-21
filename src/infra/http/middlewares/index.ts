import { Express, Request } from 'express';
import { AppConfig } from '../config';
import { errorHandler } from '../errorHandler';
import { primeRequest } from './primeRequest';

export function mountMiddlewares(app: Express, config: AppConfig) {
  app.use(errorHandler);
  app.use(primeRequest);
}
