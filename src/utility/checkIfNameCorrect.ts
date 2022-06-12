import db from "quick.db";

const register = (name) => {
  const name2 = db.get(`${name}_name`);
  if(name === name2) throw new Error("Name be in use!");
};

const login = (name) => {
  const name2 = db.get(`${name}_name`);
  if(name !== name2) throw new Error("Name never been use!");
};

export const checkIfNameCorrect = (name, api) => {
  if(api === "register") return register(name);
  if(api === "login") return login(name);
};