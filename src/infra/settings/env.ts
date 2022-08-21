import ev from 'env-var';

export interface AppEnv {
  appName: string,
  appVersion: string
  appPort: number;
}

export function createEnv(): AppEnv {
  return {
    appName: ev.get('APP_NAME').required().asString(),
    appVersion: ev.get('APP_VERSION').required().asString(),
    appPort: ev.get('APP_PORT').required().asPortNumber(),
  };
}
