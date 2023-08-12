// src/utils/db.ts
// src/utils/db.ts
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'database-1.ckox1nexjhxe.ap-southeast-2.rds.amazonaws.com',
  database: 'postgres',
  password: 'Apple123',
  port: 5432,
  ssl: {
    rejectUnauthorized: false // Temporary setting to accept self-signed certificates, use proper certificates in production
  }
});

export default pool;
