import express from 'express';
import cors from 'cors';
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT || 4000;

//MIDDLEWAREs
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});