const express = require('express');
const departmentRouter    = express.Router();
const departmentController = require('./controller');
const department =new departmentController();;

departmentRouter.route('')
    .post((req,res)=>department.create(req,res))
    .get((req,res)=>department.get(req,res))
    .put((req,res)=>department.update(req,res))
    .delete((req,res)=>department.remove(req,res));


module.exports = departmentRouter;