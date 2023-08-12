// src/controllers/UserController.ts
import { Request, Response } from 'express';
import User from '../models/User';

class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getUserById(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const user = await User.getById(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    try {
      console.log('Creating user:', name, email); // Add this line for logging
      const newUser = await User.create({ id: 0, name, email });
      console.log('New user created:', newUser); // Add this line for logging
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error); // Add this line for logging
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async updateUser(req: Request, res: Response) {
    const id = req.params.id;
    const { name, email } = req.body;
    try {
      const updatedUser = await User.update(id, { id: 0, name, email });
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await User.delete(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default UserController;
