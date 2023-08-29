export class User{
    constructor(name,contact,gender){
        this.id="user-"+ (new Date()).getTime(); 
        this.name=name;
        this.contact=contact;
        this.gender=gender;
    }
}