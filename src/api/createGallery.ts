import {Request,Response} from "express";
import {validateGalleryData} from "../utility/";
import db from "quick.db";

export const CreateGallery = (req: Request, res: Response) => {
  try {
    validateGalleryData(req.body.galleryProperties);
  } catch(e) {
    return console.log(`Missing ${e}`); 
  };

  //db.set("Filipos_galleries",[])
  const galleries = db.get(`${req.body.name}_galleries`);
const y = req.body.galleryProperties;

const x = galleries.push(y);
db.set(`${req.body.name}_galleries`, galleries);
console.log(db.get(`${req.body.name}_galleries`));
};