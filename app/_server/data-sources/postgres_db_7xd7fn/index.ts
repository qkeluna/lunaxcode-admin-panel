import { KnexPgAdapter } from '@kottster/server';
import knex from 'knex';

/**
 * Learn more at https://knexjs.org/guide/#configuration-options
 */
const client = knex({
  client: 'pg',
  connection: 'postgresql://neondb_owner:npg_gVT0Anbpx7DE@ep-noisy-unit-a1hoa9fb-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
  searchPath: ['public'],
});

export default new KnexPgAdapter(client);