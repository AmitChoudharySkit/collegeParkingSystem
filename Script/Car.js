import { Vehicle } from "./Vehicle.js";
export class Car extends Vehicle{
    constructor(number,owner){
        super(number,owner);
        this.type = "car";
    }
}