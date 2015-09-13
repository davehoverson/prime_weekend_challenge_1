var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var initialList = [claim1, claim2, claim3, claim4, claim5]

var claim6 = new claim("Woody", "Primary Care", 545);

var claim7 = new claim("Jesse", "Optical", 90);

var claim8 = new claim("Buzz Lightyear", "Specialist", 2200);

var claim9 = new claim("Mr. Potato Head", "Optical", 230);

var claim10 = new claim("Stinky Pete", "Emergency", 1500);

var newList = [claim6, claim7, claim8, claim9, claim10]

var combinedList = initialList.concat(newList);

var totalPayedOut = 0;

var newEl, newText, position;

position = document.getElementById('content');

for(var i = 0; i < combinedList.length; i++){
	combinedList[i] = calculateCost(combinedList[i]);
	newEl = document.createElement('li');
  	newText = document.createTextNode(combinedList[i]);
  	newEl.appendChild(newText);
  	position.appendChild(newEl);
}
var totalPaid = ("TOTAL PAID OUT: $" + totalPayedOut);
document.getElementById('test').innerHTML = totalPaid;

function calculateCost(object){
var patient = object.patientName;
var visit = object.visitType;
var costAmount = object.visitCost;
var cost = Math.round(costAmount * rules(visit));
totalPayedOut += cost;
var display = ("Paid out $" + cost + " for " + patient + ".");
console.log("Paid out $" + cost + " for " + patient + ".");
return display;
}

console.log(totalPaid);
	 

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

function rules(visit){
	var percent = 0;
	switch (visit){
		case "Optical":
		percent = 0;
		break;
		case "Specialist":
		percent = .10;
		break;
		case "Emergency":
		percent = 1;
		break;
		case "Primary Care":
		percent = .50;
		break;
	}
	return percent;
}
