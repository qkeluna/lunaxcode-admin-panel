import knex from 'knex';

const connectionString = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_gVT0Anbpx7DE@ep-noisy-unit-a1hoa9fb-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

export default knex({
  client: 'pg',
  connection: connectionString,
  searchPath: ['public'],
});
