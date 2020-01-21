const errMsg = (err) => {return {errMsg:'Transaction Failed',err:err,success:false}}
const configHeaders = (requireFilter = [], reqestData = {})=>{
    let data = {};
    requireFilter.map(k=>{if(reqestData[k])data[k] = reqestData[k]})
    return data;
}; // get specific data has a values for searching and use in where condition


class initialController {
    constructor(schemaFilter = [], model = {}, includedModel = []){
             console.log(this  , 'parent')
            this._SchemaFilter = schemaFilter;
            this._Model = model;
            this._IncludedModel = includedModel;
        }
  
    create (req,res) {
        this._Model.create(req.body)
            .then(data=> {res.json({data,success:true})})
            .catch(err=>res.json(errMsg(err)))
    } 
    get (req,res)  {
        let headersValidation = configHeaders(this._SchemaFilter,req.headers);
        this._Model.find(headersValidation,this._IncludedModel)
        .then(data=>res.json({data,success:true}))
        .catch(err=>res.json(errMsg(err)))
    }
    update (req,res)  {
        let headersValidation = configHeaders(this._SchemaFilter,req.headers);
        let bodyValidation = configHeaders(this._SchemaFilter,req.body); 
        // find data both such as (names or emails or phoneNumbers) if exist
        this._Model.find(bodyValidation)   
        .then(data=>{
            if(!data.length) // if not exist 
           this._Model.update(req.body,headersValidation) //update
                .then(()=>res.json({data:"Data Updated",success:true}))
                .catch(err=>res.json(errMsg(err)))
            else res.json({errMsg:"Data Duplicated",success:false})    // if exist
        })
        .catch(err=>res.json(errMsg(err)))
    }
    remove  (req,res) { // for force remove 
        let headersValidation = configHeaders(this._SchemaFilter,req.headers);
        if(headersValidation) 
        this._Model.remove(headersValidation)
            .then(()=>res.json({data:"Data Deleted",success:true}))
            .catch(err=>res.json(errMsg(err)))
        else res.json({errMsg:'please write id for delete item',success:false})
    }
}


module.exports = initialController;