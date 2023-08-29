import { Pass } from "./Pass.js";

export class DailyPass extends Pass{
    constructor(vehicle){
        let currDateTime = new Date();
        currDateTime.setDate(currDateTime.getDate()+1);
        let price=0;
        switch(vehicle.type) {
            case "cycle":
                price=5;
                break;
            case "motorCycle":
                price=10;
                break;
            case "car":
                price=50;
                break;
        }
        super(vehicle,currDateTime,price);
        this.type = "daily";
    }
}  