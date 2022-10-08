import Ajv, {JSONSchemaType} from "ajv";
const ajv = new Ajv();

interface MyData {
  name: string,
  description?: string
  created: Date,
  mainPhoto: string
}

const schema: JSONSchemaType<MyData> = {
  type: "object",
  properties: {
    name: {type: "string"},
    description: {type: "string"},
    created: {type: "string"},
    mainPhoto: {type: "string"}
  },
  required: ["name","created","mainPhoto"],
  additionalProperties: false
};
const validate = ajv.compile(schema)

export const validateGalleryData = (data) => {
  if(validate(data)){
    return null;
  } else{
    for(const err of validate.errors){
      throw err.params.missingProperty
    };
    //throw validate.errors
  };
};