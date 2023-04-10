import jwt from "jsonwebtoken";

export const checkToken = (req, res, next) => {
    
    let token = req.headers.authorization;
    let jwtSecretKey = process.env.jwtSecretKey;
    
    if (token == null) return res.sendStatus(401)

    token = token.split(' ')[1];
    console.log("token::", token);
    jwt.verify(token, jwtSecretKey, (error, user) => {
        if (error)
            return res.status(403).json({
                success: false,
                message: error.message,
            });
        req.user = user;
        next();

    });
}