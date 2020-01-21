// const {cors,logger,bodyParser,app} =require('../imports')
const departmentRoute = require('./router');
const departmentModel = require('./model');
module.exports = {
    departmentRoute,
    departmentModel
};

// app.use(cors());
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use('/depart',departmentRoute);
// app.listen(4500 , ()=>{
//     console.log("listen server 4500")
// })