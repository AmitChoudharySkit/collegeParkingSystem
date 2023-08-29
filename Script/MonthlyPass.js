import { Pass } from "./Pass.js";

export class MonthlyPass extends Pass{
    constructor(vehicle){
        let currDateTime = new Date();
        currDateTime.setMonth(currDateTime.getMonth()+1);
        let price=0;
        switch(vehicle.type){
            case "cycle":
                price=50;
                break;
            case 'motorCycle':
                price=100;
                break;
            case 'car':
                price=500;
                break;
        }
        super(vehicle,currDateTime,price);
        this.type = "monthly";
        }
}