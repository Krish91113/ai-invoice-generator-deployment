import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express'
import { connectDB } from './config/db.js';
import path from 'path';
import invoiceRouter from './routes/invoiceRouter.js';
import businessProfileRouter from './routes/businessProfileRouter.js';

const app = express();
const PORT = process.env.PORT || 4000;

//MIDDLEWAREs
app.use(cors());
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(clerkMiddleware())
//DB
connectDB();

//ROUTES
app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use('/api/invoice', invoiceRouter);
app.use('/api/businessProfile',businessProfileRouter)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});