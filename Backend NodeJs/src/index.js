
require('dotenv').config();
const express = require('express');
const router = require('./routes/router')
const auth = require('./security/Jwt')

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api',router);
app.use('/auth',auth.router)


app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})