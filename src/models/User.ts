// src/models/User.ts
import pool from '../utils/db';

interface User {
  id: number;
  name: string;
  email: string;
}

class User {
  static async getAll() {
    const query = 'SELECT * FROM users';
    const result = await pool.query(query);
    return result.rows;
  }

  static async getById(id: string) {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async create(user: User) {
    const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
    const values = [user.name, user.email];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async update(id: string, user: User) {
    const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *';
    const values = [user.name, user.email, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async delete(id: string) {
    const query = 'DELETE FROM users WHERE id = $1';
    await pool.query(query, [id]);
  }
}

export default User;
