require('dotenv').config();
const app = require('./index.js');

app.listen(process.env.SERVER_PORT, () => {
  console.log(`http://localhost:${process.env.SERVER_PORT}`);
});
