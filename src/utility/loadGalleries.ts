export const loadGalleries = (name) => {
  /*  JAK BUDE VYTVARENI TAK TOHLE DODELAT.

  const x = db.get(`${name}_galleries`);
  if(x === null) throw new Error("You have no galleries!")
  
  */
  
  const x = [{
  name: "Summer",
  description: "Some photos of my summer days.",
  created: "5. 9. 2022",
  mainPhoto: "../../photos/Filipos/Summer/1.jpg" 
  }];
  return x;
};



/*[
  {
  "galleryName": "Summer",
  "description": "Some photos of my summer days.",
  "created": "5. 9. 2022",
  "mainPhoto": "../../photos/Filipos/1.jpg" 
  }
]*/