import UsersSchema from '../models/user.js'

export const signUpController = async(req,res) => {
    try{
        const { userName, userEmail, password } = req.body;
        if(password.length < 8 ) return res.status(400).json({
            status:false,
            message:"Password Length Should Be Minimum 8 Characters!",
        })
        const user = {
            userName:userName,
            email:userEmail,
            password:password
        }
        const usersSchemaCheck = new UsersSchema(user)
        const usersSave = await usersSchemaCheck.save()

        res.status(200).json({
            status:true,
            message:"User Signed Up Successfully"
        })
    } catch(error) {
        res.json({
            status:false,
            message:error.message
        })
    }
}

export const loginController = async(req,res) => {
    try{
        const { userEmail, password} = req.body
        if(!userEmail || !password) return res.status(400).json({
            status:false,
            message:"Missing Fields"
        })
        const isUserExist = await UsersSchema.findOne({ email:userEmail })
        console.log(isUserExist,"===>>>>IsUserExist")
        if(isUserExist) {
            if(isUserExist.password === password) return res.status(200).json({
                status:true,
                message:"User Found"
            })
            res.status(400).json({
                status:false,
                message:"Invalid Credentials"
            })
        } else {
            res.status(400).json({
                status:false,
                message:"User not found"
            })
        }
    } 
    catch(error) {
        res.status(500).json({
            status:false,
            message:"Internal Server Error"
        })
    }
}

export const logoutController = (req,res) => {
    res.json({
        status:true,
        message:"Logout Successfully"
    })
}

export const forgetPasswordController = (req,res) => {
    res.json({
        status:true,
        message:"Forget Password Successfully"
    })
}