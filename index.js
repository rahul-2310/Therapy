const express = require('express')
const exphbs = require('express-handlebars');
const app=express();

// Config handlebars
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');


//Database Connection
require('./models/db')


//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/',require('./controllers/TherapyController'))

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.log(`Server is running at ${PORT}`))