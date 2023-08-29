export class Vehicle{
    constructor(number,owner){
        this.id = "vehicle-" + (new Date()).getTime();
        this.number=number;
        this.owner=owner;
    }
}