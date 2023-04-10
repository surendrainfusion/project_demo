import Joi from "joi";

const signinSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(5).max(30).required(),
});

//Common function for Validation
const show = (schemaName, body) => {
  const data = schemaName.validate(body);
  return data;
};

//check valid data
export const checkvalidData = (route) => {
  return (req, res, next) => {
    const body = req.body;
    let result;

    switch (route) {
      case "login": {
        result = show(signinSchema, body);
        break;
      }
      default: {
        console.log("not match");
      }
    }

    if (result.error == null) {
      next();
    } else {
      res.status(404).json({
        success: false,
        message: result.error.details[0].message,
      });
    }
  };
};
