import { User } from "./User.js"

export class Student extends User{
    constructor(name,contact,gender){
        super(name,contact,gender);
        this.type="student";
    }
}