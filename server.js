const express       = require('express');
const bodyParser    = require( 'body-parser');
const logger        = require( 'morgan');
const cors          = require( 'cors');
const app           = express();
const {departmentRoute} = require('./services/departmentService/index');

const {userRoute} = require('./services/userService/index');
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/user',userRoute);
app.use('/depart',departmentRoute);

app.listen(4503 , ()=>{
    console.log("listen server 4503")
})

