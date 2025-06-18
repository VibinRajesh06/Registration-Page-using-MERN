const { signup, login } = require("../Controllers/AuthController");
const { signValidation, loginValidation } = require("../Middlewares/AuthValidation");

const router = require("express").Router();

router.post('/signup',signValidation,signup);
router.post('/login', loginValidation,login);

module.exports = router;