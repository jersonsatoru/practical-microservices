import { AppEnv } from '../../settings/env';

export interface AppConfig {
  env: AppEnv
}

export function createConfig(env : AppEnv): AppConfig {
  return {
    env,
  };
}
