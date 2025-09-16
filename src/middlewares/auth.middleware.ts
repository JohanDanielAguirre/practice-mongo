import {Response,Request,NextFunction} from "express";
import jwt  from "jsonwebtoken";
import {UserRole} from "../models/Student.model";
export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let  token = req.header('Authorization')
        if(!token){
            res.status(401).json({message: 'unauthorized'});
            return
        };
        token = token.replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWTSECRET ||'secret');
        req.body.user = decoded;
        next();
    }catch(error){
        res.status(403).json(error)
    }
}
export const authoriroles = (allowRoles: UserRole[]) => {
    return(req: Request, res: Response, next: NextFunction) => {
        const user = req.body.user;
        if(user && !allowRoles.includes(user.role)){
            res.status(403).json({message: `forbidden, you are a ${user.role} and this service is only avaliable for ${allowRoles}`});
            return;
        }
        next();
    }

}

export const authorizedRoles = () => {}