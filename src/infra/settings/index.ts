import { AppConfig } from '../http/config';
import { AppEnv } from './env';

export interface Settings {
    env: AppEnv,
    config: AppConfig
}
