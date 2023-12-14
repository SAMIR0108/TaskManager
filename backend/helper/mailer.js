let mailer = require("nodemailer")

function mail(mailOption){
    return new Promise((resolve,reject)=>{
        let transporter = mailer.createTransport({
            host : "smtp.gmail.com",
            port : 465,
            secure : true,
            auth : {
                user : "samirkhan215786@gmail.com",
                pass : "fdbt nedt ujkr bokw"
            }
        })
        transporter.sendMail(mailOption,(err,info)=>{
            if(err){
                return reject(err)
            }
            return resolve(`mail is send to ${mailOption.to}`)
        })
    })
}

module.exports = {mail}