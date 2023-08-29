import { Car } from "./Car.js";
import { Cycle } from "./Cycle.js";
import { DailyPass } from "./DailyPass.js";
import { Faculty } from "./Faculty.js";
import { MonthlyPass } from "./MonthlyPass.js";
import { MotorCycle } from "./MotorCycle.js";
import { Pass } from "./Pass.js";
import { Student } from "./Student.js";
import { YearlyPass } from "./YearlyPass.js";

const users =  []
const vehicles = []
const passes = []

document.addEventListener("DOMContentLoaded",()=>{
    let userSubmitButton = document.getElementById("userSubmitButton");
    userSubmitButton.addEventListener("click",registerUser);
    let vehicleSubmitButton = document.getElementById("vehicleSubmitButton");
    vehicleSubmitButton.addEventListener("click",addVehicle);

})

const qrCodegenerator = (pass) => {
    let qrImage = document.getElementById("qrCode");
    let url  = "https://chart.googleapis.com/chart?cht=qr&chs=180x180&chl=Name :" + pass.vehicle.owner.name +"    " +
    "VehicleType :" + pass.vehicle.type + "   " + "Pass ID :" + pass.id + " " + "Pass Type :" + pass.type + "  " +
    "Expiry Date :" + pass.expiry;
    let ifr = ` <img src = "${url}" height="150px" width="150px"> `;
    qrImage.innerHTML = ifr;
}

const showpasschoice = (vehicle) => {
    let dailypass = new DailyPass(vehicle);
    let monthlypass = new MonthlyPass(vehicle);
    let yearlypass = new YearlyPass(vehicle);

    let passchoice = document.getElementById("passChoice");
    passchoice.innerHTML = '';
    let h1 = document.createElement("H1");
    h1.innerHTML = "Pass Choice";

    passchoice.appendChild(h1);
    
    let button = document.createElement("INPUT")
    button.setAttribute('type',"Button")
    button.value = "Dailypass-" + dailypass.price; 
    button.addEventListener("click",() => {
        passes.push(dailypass);
        dailypass.print();
        qrCodegenerator(dailypass);
    })
    passchoice.appendChild(button)

    button = document.createElement("INPUT")
    button.setAttribute('type',"Button")
    button.value = "Monthlypass-" + monthlypass.price; 
    button.addEventListener("click",() => {
        passes.push(monthlypass);
        monthlypass.print();
        qrCodegenerator(monthlypass);
    })
    passchoice.appendChild(button)

    button = document.createElement("INPUT")
    button.setAttribute('type',"Button")
    button.value = "Yearlypass-" + yearlypass.price; 
    button.addEventListener("click",() => {
        passes.push(yearlypass);
        yearlypass.print();
        qrCodegenerator(yearlypass);
    })
    passchoice.appendChild(button)
    
}

const registerUser = (e) => {
    e.preventDefault();
    let userName = document.getElementById("userName").value;
    let userRole = document.getElementById("userRole").value;
    let userContact = document.getElementById("userContact").value;
    let userGender = document.getElementById("userGender").value;

    let user = null;
    switch(userRole){
        case "student" :
            user = new Student(userName,userContact,userGender);
        break
        case "faculty" :
            user = new Faculty(userName,userContact,userGender);
        break
        default : console.log("No valid Choice");

    }
    users.push(user);
    console.log(users)

    let userDetails = JSON.parse(localStorage.getItem("User"))  ?? [];
    userDetails.push(user)

    localStorage.setItem("User",JSON.stringify(userDetails))

    alert(userName + " " + "You are Successfully Registered as :" + userRole + ".")

}

const addVehicle = (e) => {
    e.preventDefault();
    let vehicleNumber = document.getElementById("vehicleNumber").value;
    let vehicleType = document.getElementById("vehicleType").value;
    let vehicleowner=users[users.length-1]
    let  vehicle=null;
    switch(vehicleType){
        case "cycle" :
            vehicle = new Cycle(vehicleNumber,vehicleowner)
        break
        case "motorcycle" :
            vehicle = new MotorCycle(vehicleNumber,vehicleowner)
        break
        case "car" :
            vehicle = new Car(vehicleNumber,vehicleowner)
        default : console.log("No valid Choice");
    }
    vehicles.push(vehicle);
    console.log(vehicles);
    showpasschoice(vehicle);

    
    let vehicleDetails = JSON.parse(localStorage.getItem("Vehicle"))  ?? [];
    vehicleDetails.push(vehicle)

    localStorage.setItem("Vehicle",JSON.stringify(vehicleDetails))

    alert(vehicleowner.name + "  Your vehcile" + vehicleNumber + "is Successfully registered" + ".")
  

}

