import { createApp, createIdentityProvider } from '@kottster/server';
import schema from '../../kottster-app.json';

/* 
 * For security, consider moving the secret data to environment variables.
 * See https://kottster.app/docs/deploying#before-you-deploy
 */
export const app = createApp({
  schema,
  secretKey: 'x0yFcOk2uOM9paYsxUWutW7ekBUwjD56',
  kottsterApiToken: 'jgnVNZkN0tIV7X1KYhwR2pAE5QbaxpSa',

  /*
   * The identity provider configuration.
   * See https://kottster.app/docs/app-configuration/identity-provider
   */
  identityProvider: createIdentityProvider('sqlite', {
    fileName: 'app.db',

    passwordHashAlgorithm: 'bcrypt',
    jwtSecretSalt: 'U2rvjmvnhJnVpGUM',
    
    /* The root admin user credentials */
    rootUsername: 'admin',
    rootPassword: 'Ymerick102728',
  }),
});