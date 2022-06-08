import { verify } from "argon2";

export const checkIfPasswordCorrect = async (hash, nohash) => {
  if(!(await verify(hash, nohash))) throw new Error("Password is wrong!");

  else return null;
};