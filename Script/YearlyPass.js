import { Pass } from "./Pass.js";

export class YearlyPass extends Pass{
    constructor(vehicle){
        let currDateTime = new Date();
        currDateTime.setFullYear(currDateTime.getFullYear()+1);
        let price=0;
        switch(vehicle.type){
            case 'cycle':
                price=500;
                break;
            case 'motorCycle':
                price=1000;
                break;
            case 'car':
                price=5000;
                break;
    
        }
        super(vehicle,currDateTime,price);
        this.type = "yearly";
    }
}