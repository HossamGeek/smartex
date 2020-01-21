const initialController = require('../initialController');
const serviceModel = require('../serviceModel'); 
const userSchema = require('./model'); //get user schema model
const {departmentModel} = require('../departmentService/index'); //get department schema model
const userModel = new serviceModel(userSchema);
const schemaFilter =["id",'username','email','phone','is_in_active']; //schema for filteration
const includedModel = [{model:departmentModel}];


class userController extends initialController{
    constructor(){
        super(schemaFilter,userModel,includedModel)
    }
   
}

module.exports = userController;