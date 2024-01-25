import UsersSchema from '../model/user.js'

export const signupController = async(req,res) => {
    try {
        const { userName,userEmail,password } = req.body;
        console.log("UserName ==>>>>",userName);
        console.log(typeof userName);

        console.log(password,"=====>>>Password")
        if(password.length < 8) return res.send(400).json({
            status:false,
            message:"Password length should be minimum 8 characters"
        })
        const user = {
            userName:userName,
            email:userEmail,
            password:password
        }

        const userSchemaCheck = new UsersSchema(user)
        const userSave = await userSchemaCheck.save()

        res.json({
            status:true,
            message:"User Signed Up Successfully"
        })
    } catch(err) {
        res.json({
            status:false,
            message:err.message
        })
    }
}