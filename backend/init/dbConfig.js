const {Sequelize,Model,DataTypes,QueryTypes,Op} = require("sequelize")
const config = require("config")
const mysqlConfig = config.get("mysql")
let sequelizeCon = new Sequelize(mysqlConfig)
// sequelizeCon.sync({alter:true})
sequelizeCon.authenticate().then(()=>{
    console.log("Database connected Successfully");
}).catch((err)=>{
    console.log("Database Not Connected",err);
})

// sequelizeCon.sync({alert:true})
module.exports = {
    sequelizeCon,
    Model,
    DataTypes,
    QueryTypes,
    Op
}
