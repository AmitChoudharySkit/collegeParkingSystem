import { Vehicle } from "./Vehicle.js";

export class MotorCycle extends Vehicle{
    constructor(number,owner){
        super(number,owner);
        this.type = "motorCycle";
    }
}

