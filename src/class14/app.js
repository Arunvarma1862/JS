import { firstname as fname } from "./utils/firstname.js";
import { age } from "./utils/age.js";
import  text, { person ,person2 } from "./utils/person.js";


console.log(fname,age);

const pers= new person("virat","kohil",23);
const kers= new person2("kohil","jagega",63);
console.log(text)

pers.info();
kers.info()

