const Joi = require('joi');

const signValidation = (req,res,next) =>{
    const schema = Joi.object({
        name:Joi.string().required(),
        email:Joi.string().required(),
        password:Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if(error){
        return res.status(400).json({message:"Bad request",error})
    }
    next();
}

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }
    next();
}

module.exports = {
    signValidation,loginValidation
}