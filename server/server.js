import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { clerkMiddleware, requireAuth } from '@clerk/express';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(requireAuth());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});