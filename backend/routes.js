let express = require("express")
let routes = express.Router()
let authCon = require("./controller/authController")
let task = require("./controller/taskController")
let {auth} = require("./middleware/authMiddleware")

routes.post("/register",authCon.register)
routes.post("/login",authCon.login)


routes.post("/task/create",auth("task_create"),task.create)
routes.get("/task/viewone/:id",auth("task_create"),task.view)
routes.get("/task/viewall",task.viewAll)
routes.put("/task/update/:id",auth("task_create"),task.update)
routes.delete("/task/delete/:id",auth("task_create"),task.tdelete)
routes.put("/task/restore/:id",auth("task_create"),task.trestore)
routes.put("/task/assign/:id",auth("task_create"),task.taskAssign)
routes.put("/task/status/:id",auth("task_create"),task.tStatus)
routes.put("/task/revoke/:id",auth("task_create"),task.revokeTask)

module.exports = {routes}