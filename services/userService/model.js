const {sequelize,DataTypes} = require('../configDB');

const  {departmentModel} = require( '../departmentService/index');


const userModel =  sequelize.define('user',{
      id:{
          type:DataTypes.UUID,
          primaryKey:true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          unique:true
      },
      fname:{
        field:'fname',
        type:DataTypes.STRING,
      },
      lname:{
          field:'lname',
          type:DataTypes.STRING,
      },
      username:{
          field:'username',
          type:DataTypes.STRING,
          unique:true
      },
      email:{
          field:'email',
          type:DataTypes.STRING,
          unique:true
      },
      phone:{
        field:'phone',
        type:DataTypes.STRING,
        unique:true
      },   
      password:{
          field:'password',
          type:DataTypes.STRING,
      },
        is_in_active:{
            field:'is_in_active',
            type:DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false 
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
         }
        , 
        department_id: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
            model: departmentModel,
            key: 'id',
        }
        }

  }, {
      tableName: 'user',
      freezeTableName: true,
    });

    //for create new column use this lines >> 
    //1- add column and attr in this ^^ schema
    // 2- then use this function >> sequelize.queryInterface.addColumn(table,column,attr) like this >>
    
    // sequelize.queryInterface.addColumn('user','department_id',{
    //     type: DataTypes.UUID,
    //     allowNull: true,
    //     references: {
    //     model: 'department',
    //     key: 'id',
    // }
    // })

    // after added a new column  make a new post for
    // apply column and comment >> sequelize.queryInterface.addColumn 
    
    userModel.belongsTo(departmentModel, { foreignKey: 'department_id' ,targetKey: 'id',sourceKey:'department_id',
    constraints: true, onDelete: 'restrict', onUpdate: 'restrict' });
    

  


module.exports =  userModel;