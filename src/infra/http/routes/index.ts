import { Router, Express } from 'express';
import { AppEnv } from '../../settings/env';

export function mountRoutes(app: Express, env: AppEnv): void {
  const routes = Router();
  routes.get('/', async (req, res) => res.json({
    message: 'Hello world',
  }));

  app.use(routes);
}
