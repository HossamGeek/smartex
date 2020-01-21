const {sequelize,DataTypes} = require('../configDB');

const department = sequelize.define('department',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        unique:true,
        primaryKey:true
    },
    department_name:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
        field:'depart_name'
    },
    department_num:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
        field:'depart_num'
    },
    is_in_active:{
        type:DataTypes.BOOLEAN, 
        field:'is_in_active',
        defaultValue:false,
        allowNull: false,
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
},{
    tableName: 'department',
    freezeTableName: true,
  })

 module.exports = department; 