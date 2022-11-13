const express = require('express');
const morgan = require('morgan');
const app = express();

const UserRoute = require('./routes/users');
const AuthRoute = require('./routes/auth')


app.use(express.json());
app.use(morgan('common'));


app.use('api/users', UserRoute);
app.use('/api/auth', AuthRoute)








app.listen(8000, ()=>{
    console.log("Backend sever is runing...")
})