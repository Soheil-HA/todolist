const express = require('express');
const bodyParser = require('body-parser');

//*Database connection
require('./utils/database');
//*End Connection

const { setStatics } = require('./utils/statics');
const adminRoutes = require('./routes/admin');
const indexRoutes = require('./routes/index');
const errorController = require('./controllers/error');

const app = express();

//MiddleWares
app.use(bodyParser.urlencoded({ extended: false }));
//End of MiddleWares

//EJS
app.set('view engine', 'ejs');
app.set("views", "views");
//End of EJS

//Statics
setStatics(app);
//End of Statics


//Routes
app.use(indexRoutes);
app.use('/admin', adminRoutes);
//End of routes

//404Page
app.use(errorController.get404);
//404Page End


app.listen(3020, () => console.log(`Server is running.`));





























//MVC
//Model , View , Controller
//Model => Communication with Datas
//View => Things Which user sees
//Controller => Communication with model and view