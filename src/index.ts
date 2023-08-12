import express from 'express';
import userRoutes from './routes/userRoutes';
import cors from 'cors'; // Import the cors middleware

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
