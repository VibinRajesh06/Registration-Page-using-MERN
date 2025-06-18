const bcrypt = require('bcrypt');
const UserModel = require("../Models/Users");
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: 'User already exists, you can login',
        success: false
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({
      message: "Signup successful",
      success: true
    });
  } catch (err) {
    console.error(err); // 👈 Check this in terminal
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

const login = async(req,res) =>{
    try{
        const { email,password } = req.body;
        const user = await UserModel.findOne({ email });
        if(!user){
            return res.status(403).json({message:'Auth Failed email or password is wrong',success:false});
        }
        const isPassEqual = await bcrypt.compare(password,user.password);
        if(!isPassEqual){
            return res.status(403).json({message:'Auth Failed email or password is wrong',success:false});
        }
        const jwtToken = jwt.sign({email:user.email, _id:user._id},
            'fd2f05d61e349b979cb5664392b43b115f39265993853d374bd30b93bb9ced2c',
            {expiresIn:'24h'})

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                user:{
                    name:user.name
                }
            })
    }catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

module.exports = { signup,login };
