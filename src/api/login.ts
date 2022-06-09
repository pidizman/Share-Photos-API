import {Request, Response} from "express";
import {hash} from "argon2";
import {create} from "njwt";
import db from "quick.db";
import secureRandom from "secure-random";
import {checkIfPasswordCorrect} from "../utility/checkIfPasswordCorrect.ts";
import {checkIfMailCorrect} from "../utility/checkIfMailCorrect.ts";

export const Login = async (req: Request, res: Response) => {
  const name = req.body.name;
  const mail = req.body.mail;
  const password = req.body.password;
  const hashPass = await hash("test");
  
  try{
    checkIfMailCorrect(mail);
    await checkIfPasswordCorrect(hashPass, password);
  }catch(e){
    res.status(404);
    return res.json({
      data: "null",
      error: e.message
    });
  };

  const signingKey = secureRandom(256, {type: "Buffer"});
  db.delete(`${name}_signingKey`);
  db.set(`${name}_signingKey`, signingKey);
  
  const token = create(name,signingKey).compact();  
  db.delete(`${name}_token`);
  db.set(`${name}_token`, token);

  console.log(`Key: ${db.get(`${name}_signingKey`)}\nToken: ${db.get(`${name}_token`)}`); //been used only for test if db work

  res.status(200);
  res.json({
    data: "Logined!",
    token: token
  });
  
};