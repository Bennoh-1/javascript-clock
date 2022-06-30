const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1e59ceb17msh21fefcef3f4ab23p153e00jsn7b149bb10eba',
		'X-RapidAPI-Host': 'world-clock.p.rapidapi.com'
	}
};

fetch('https://world-clock.p.rapidapi.com/json/utc/now', options)
	.then(response => response.json())
	// .then(response => console.log(response))
	.then(json => {
		const dayid = document.querySelector('.date-information #day span')
		const dateid = document.querySelector('.date-information #date span')
		const timeid = document.querySelector('.date-information #time span')
		
		dateid.textContent = json.currentDateTime
		dayid.innerHTML = json.dayOfTheWeek
	})
	.catch(err => console.error(err));

	//currentDateTime: "2022-06-24T14:15Z"
//currentFileTime: 133005537120132130
//dayOfTheWeek: "Friday"


	// function renderData(response){
		
	// 	}
		
		//renderData()

	

		fetch("http://api.open-notify.org/astros.json")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand')
const secondHand = document.querySelector('[data-second-hand]')


function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}	

function setRotation(element, rotationRatio) {
		element.style.setProperty('--rotation', (rotationRatio * 360))
	
	
}	
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
setClock()

// Provides Functionality for the Digital Clock
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("time-header").innerText = time;
    document.getElementById("time-header").textContent = time;

    setTimeout(showTime, 1000);

}

showTime()