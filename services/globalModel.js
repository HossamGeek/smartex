class serviceModel {
    constructor(model){
        this._model = model;
    }
    create (values = {})   
    {
        return this._model.sync({force:false}).then(()=>this._model.create(values))
    }
    find (where = {} , include = [])
    {
        return this._model.findAll({where,include})  
    }
    update (values = {},where = {})
    {
        return this._model.update(values,{where})  
    }
    remove(where = {}) 
    {return this._model.destroy({where})} 


}

module.exports =serviceModel;