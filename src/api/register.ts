import {Request, Response} from "express";
import {hash} from "argon2";
import db from "quick.db";
import {checkIfNameCorrect, createToken} from "../utility";

export const Register = async (req: Request, res: Response) => {
  const name = req.body.name;
  const password = await hash(req.body.password);

  try {
    checkIfNameCorrect(name, "register");
  } catch (e) {
    res.status(404)
    return res.json({
      data: "null",
      error: e.message
    });
  };
  
  db.set(`${name}_name`, name);
  db.set(`${name}_password`, password);
  const token = createToken(name);
  console.log(token);

  res.status(200);
  res.json({
    data: "Registred!",
    token: token,
    name: name
  });
  //console.log(mail,"\n",name,"\n",password);
};