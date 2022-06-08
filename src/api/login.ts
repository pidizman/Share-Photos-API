import {Request, Response} from "express";
import {hash} from "argon2";
import {create} from "njwt";
import secureRandom from "secure-random";
import {checkIfPasswordCorrect} from "../utility/checkIfPasswordCorrect.ts";
import {checkIfMailCorrect} from "../utility/checkIfMailCorrect.ts";

export const Login = async (req: Request, res: Response) => {
  const mail = req.body.mail;
  const password = req.body.password;
  const hashPass = await hash("test");
  
  try{
    checkIfMailCorrect(mail);
    await checkIfPasswordCorrect(hashPass, password);
  }catch(e){
    return res.json({
      data: "null",
      error: e.message
    });
  };

  const 

  res.json({
    data: "All be OK!"
  })
  
};