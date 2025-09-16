import {Request} from "express";

export interface JWTRequest extends Request{
    user?:{
        email?: string,
        role?: string
    }
}