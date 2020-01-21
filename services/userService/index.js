//const {cors,logger,bodyParser,app} =require('../imports')
const userRoute = require('./router');
const userModel = require('./model');
module.exports = {
    userRoute,
    userModel
};



// app.use(cors());
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use('/user',userRoute);

// app.listen(4501 , ()=>{
//     console.log("listen server 4501")
// })