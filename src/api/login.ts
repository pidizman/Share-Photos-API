import {Request, Response} from "express";
import {hash} from "argon2";
import {checkIfPassworfCorrect} from "../utility/checkIfPasswordCorrect.ts";

export const Login = (req: Request, res: Response) => {
  const mail = req.body.mail;
  const password = req.body.password;
  const hashPass = hash(req.body.password);
  
  try{
    checkIfPassworfCorrect(hashPass, password);
  }catch(e){
    res.json({
      data: "null",
      error: e.message
    });
  };

  res.json({
    data: "All be OK!"
  })
  
};