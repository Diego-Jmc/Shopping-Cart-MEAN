
require('dotenv').config();
const express = require('express');
const router = require('./routes/router')

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api',router);

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})