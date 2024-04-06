import dotenv from 'dotenv';
dotenv.config();
import app from './index.js';

app.listen(process.env.SERVER_PORT, () => {
  console.log(`http://localhost:${process.env.SERVER_PORT}`);
});
