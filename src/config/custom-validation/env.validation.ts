import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Staging = 'staging',
  Test = 'test',
  Provision = 'provision',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;
  @IsString()
  DB_USER: string;
  @IsString()
  DB_PASS: string;
  @IsString()
  DB_HOST: string;
}

class DevEnv {
  @IsString()
  DB_DEV_DB_NAME: string;
}

class StagingEnv {
  @IsString()
  DB_STG_DB_NAME: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  if (config.NODE_ENV == 'development') {
    const devConfig = plainToInstance(DevEnv, config, {
      enableImplicitConversion: true,
    });
    const errors = validateSync(devConfig, {
      skipMissingProperties: false,
    });

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }
  }

  if (config.NODE_ENV == 'staging') {
    const stagingConfig = plainToInstance(StagingEnv, config, {
      enableImplicitConversion: true,
    });
    const errors = validateSync(stagingConfig, {
      skipMissingProperties: false,
    });

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }
  }

  return validatedConfig;
}
