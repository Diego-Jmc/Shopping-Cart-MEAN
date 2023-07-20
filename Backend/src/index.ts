import express from 'express';


const PORT = process.env.port || 3000

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} }`);
});