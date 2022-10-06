import db from "quick.db";

export const checkToken = (name, token) => {
  const tokenFromDb = db.get(`${name}_token`);

  if(token !== tokenFromDb) throw new Error("Wrong Token");
    
  else return null;
};