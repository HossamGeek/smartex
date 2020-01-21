const express = require('express')
const userRouter = express.Router();
const userController = require('./controller');
const user = new userController();

userRouter.route('')
    .post((req,res)=>user.create(req,res))
    .get((req,res)=>user.get(req,res))
    .put((req,res)=>user.update(req,res))
    .delete((req,res)=>user.remove(req,res));



module.exports = userRouter;