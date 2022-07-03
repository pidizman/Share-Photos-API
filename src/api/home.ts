// Do tohodle nešahat!

import {Request,Response} from "express";
import {checkToken} from "../utility";

export const Home = (req: Request, res: Response) => {
  const name = req.body.name;
  const token = req.body.token;

  try {
    checkToken(name,token);
  } catch (e) {
    console.log(e);
  }
};