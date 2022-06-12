import secureRandom from "secure-random";
import {create} from "njwt";
import db from "quick.db";

export const createToken = async (name) => {
  await db.delete(`${name}_signingKey`);
  await db.delete(`${name}_token`);
  
  const signingKey = secureRandom(256, {type: "Buffer"});
  const token = create(name,signingKey).compact();
  
  db.set(`${name}_token`, token);
  db.set(`${name}_signingKey`, signingKey);

  console.log(token);
  return token;
};