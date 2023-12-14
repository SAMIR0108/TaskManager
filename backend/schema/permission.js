let {sequelizeCon,Model,DataTypes} = require("../init/dbConfig")
class Permission extends Model{}
Permission.init({
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    }
},{
    tableName : "permission",
    modelName : "Permission",
    sequelize : sequelizeCon
})

sequelizeCon.sync({alter : true})
module.exports = {Permission}

