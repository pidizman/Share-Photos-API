// Tohle je hotové!

import {Request, Response} from "express";
import {hash} from "argon2";
import db from "quick.db";
import { checkIfPasswordCorrect, checkIfNameCorrect, createToken } from "../utility";

export const Login = async (req: Request, res: Response) => {
  const name = req.body.name;
  const password = req.body.password;
  const hashPass = db.get(`${name}_password`);
  
  try{
    checkIfNameCorrect(name, "login");
    await checkIfPasswordCorrect(hashPass, password);
  }catch(e){
    res.status(404);
    return res.json({
      data: "null",
      error: e.message
    });
  };

  const token = createToken(name);

  //console.log(`Key: ${db.get(`${name}_signingKey`)}\nToken: ${db.get(`${name}_token`)}`); //been used only for test if db work

  res.status(200);
  res.json({
    data: "Logined!",
    token: token,
    name: name
  });
  
};