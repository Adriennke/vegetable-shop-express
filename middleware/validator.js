const {body, validationResult} = require("express-validator");

exports.validateInput = () => {
    return [
        body("email")
        .isEmail()
        .normalizeEmail()
        .withMessage("invalid email address"),

        body("password")
        .isLength({min: 6})
        .withMessage("password is too short"),

        body("firstName")
        .notEmpty()
        .exists()
        .trim()
        .escape()
        .withMessage("Please give your first name"),

        body("lastName")
        .notEmpty()
        .exists()
        .trim()
        .escape()
        .withMessage("Please give your last name"),

        (req,res,next) =>{
            let errors = validationResult(req)

            if(!errors.isEmpty()){
                console.log(errors)
                let err = errors.errors.map(er =>({
                    [er.param]: er.msg
                }))
                return res.json({
                    status: 203,
                    message: err
                })
            }
            next()
        }


    ]
}