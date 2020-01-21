const initialController = require('../initialController');
const serviceModel = require('../serviceModel'); 
const departmentSchema = require('./model'); //get schema model
const departmentModel = new serviceModel(departmentSchema);
let schemaFilter =["id",'department_num','department_name','is_in_active']; //schema for filteration

class departmentController extends initialController{
    constructor(){
        super(schemaFilter,departmentModel)
    }

}


module.exports =departmentController;