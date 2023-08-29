import { Vehicle } from "./Vehicle.js";

export class Cycle extends Vehicle{
    constructor(number,owner){
        super(number,owner);
        this.type = "cycle";
    }
}