export const checkIfMailCorrect = (mail) => {
  const mail2 = "test@gmail.com";
  if(mail !== mail2) throw new Error("Mail never been use!");
};