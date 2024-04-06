import dotenv from 'dotenv';
dotenv.config();
import app from './index.js';

const port = 5000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(process.env.USER);
});