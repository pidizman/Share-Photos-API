import {Request,Response} from "express";

export const Home = (req: Request, res: Response) => {
  const name = req.body.name
};