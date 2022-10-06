import {Request,Response} from "express";
import {checkToken,loadGalleries} from "../utility";

export const Home = (req: Request, res: Response) => {
  const name = req.body.name;
  const token = req.body.token;

  try {
    checkToken(name,token);
    var galleries = loadGalleries(name);
  } catch (e) {
    res.status(404)
    return res.json({
      data: "null",
      error: e.message
    });
  };
  console.log("x");

  res.status(200)
  res.json({
    data: `${name} galleries and lists!`,
    galleries: galleries
  });
};