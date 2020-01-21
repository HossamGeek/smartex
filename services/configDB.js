const Sequelize = require('sequelize');

let sequelize;
const define  = {
    charset: 'utf8',
    collate: 'utf8_general_ci', 
    timestamps: true,
    freezeTableName: true
};

const 
    serverDBName = 'smart',
    serverUserName = 'root',
    ServerDBPass = '1234',
    hostName = 'localhost',
    portNum = '3306'; 

    sequelize = new Sequelize(serverDBName,serverUserName,ServerDBPass,{
        define: {define},
        host: hostName,
        port:portNum,
        dialect: 'mysql',
        logging: false  
    });

const DataTypes = Sequelize;

    sequelize.authenticate().then(()=>{
        console.log('Database connected');
    }).catch(err=>{
        console.log("can't connect to Database cause of " + err );
    })

module.exports = {
    sequelize,DataTypes
}