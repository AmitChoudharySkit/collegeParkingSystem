import { User } from "./User.js";
export class Faculty extends User{
    constructor(name,contact,gender){
        super(name,contact,gender);
        this.type ="faculty";
    }
}