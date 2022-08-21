import { createEnv } from '../settings/env';
import { createApp } from './app';
import { createConfig } from './config';

const env = createEnv();
const config = createConfig(env);
const app = createApp({ config, env });
app.listen(env.appPort, () => {
  // TODO: turn on eslint rule no-console after implementing logger
  console.log('server started');
});
