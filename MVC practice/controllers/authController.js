export const signUpController = (req,res) => {
    try{
        const { userName, userEmail, password } = req.body;
        if(password.length < 8 ) return res.status(400).json({
            status:false,
            message:"Password Length Should Be Minimum 8 Characters!",
        })
        const user = {
            userName:userName,
            userEmail:userEmail,
            password:password
        }
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

export const loginController = (req,res) => {
    try{
        const { userEmail, password} = req.body
        if(!userEmail || !password) return res.status(400).json({
            status:false,
            message:"Missing Fields"
        })
        res.status(200).json({
            status:true,
            message:"User Login Successfully"
        })
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