
export class Pass{
    constructor(vehicle,expiry,price){
        this.id = "pass-" + (new Date()).getTime();
        this.vehicle = vehicle;
        this.expiry = expiry;
        this.price = price;
    }

print(){
    let passToPrint = `
    <h1>Pass</h1>
    <div>
    <label>Pass ID : </label>
    <label>${this.id}</label>
</div>
<div>
    <label>Vehicle ID : </label>
    <label>${this.vehicle.id}</label>
</div>
<div>
    <label>Owner Name : </label>
    <label>${this.vehicle.owner.name}</label>
</div>
<div>
    <label>Expiry : </label>
    <label>${this.expiry}</label>
</div>
    `
    let ticket = document.getElementById("printPass")
    ticket.innerHTML = passToPrint;
}

}