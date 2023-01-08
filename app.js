/*global console, $ , document*/
/*eslint-disable no-console*/
// const express=require("express");
// const https = require("https");
// function apiop()
// {


// const e = require("express");

// const { template } = require("document/lib/lang")

// const app=express();
// const url="https://api.weatherapi.com/v1/current.json?key=dcbc3a49f1a44d8a9b1184038230301&q=Muzaffarpur&aqi=yes";

// app.get("/",function(req,res){
// 	res.send("Server is up and running");
// })

// https.get(url,function(response){
// 	console.log(response.statusCode);

// response.on("data",function(data){

/*const weatherData=JSON.parse(data)
const name=weatherData.location.name;
const region=weatherData.location.region;
const country=weatherData.location.country;
const timeZone=weatherData.location.tz_id;
const localTime=weatherData.location.localtime;
const temp=weatherData.current.temp_c;
const condition=weatherData.current.condition.text;*/

/*console.log(name);
console.log(region);
console.log(country);
console.log(timeZone);
console.log(localTime);
console.log(temp);
console.log(condition);*/
// 	 temp.innerHTML=response.temp_c;
// 	})
// })
// app.listen(3000,function() {
// 	console.log("Server is running on port 3000.");
// })

// }

// function assign()
// {
// 	document.getElementById("temp").innerHTML=temp;
// }
// apiop();


const apiData = {
	method: 'GET',
	headers: {
		'key': 'dcbc3a49f1a44d8a9b1184038230301',
		'host': 'https://api.weatherapi.com/v1/'
	}
};
const getWeatherDetails = (cityName) => {
	// const URL="https://api.weatherapi.com/v1/current.json?key=dcbc3a49f1a44d8a9b1184038230301&q="+cityName+"aqi=yes";
	fetch("https://api.weatherapi.com/v1/current.json?key=dcbc3a49f1a44d8a9b1184038230301&q=" + cityName + "&aqi=yes", apiData)
		.then(response => response.json())
		.then((response) => {
			if (response.error) {
				alert("Oops can't find the city!");
			}
			// 	const errr=23;
			// 	if(response.statusCode!=200){
			// 	throw Error(errr)
			// }
			console.log(response)


			temp_c.innerHTML = response.current.temp_c;
			city.innerHTML = response.location.name;
			regionName.innerHTML = response.location.region;
			countryName.innerHTML = response.location.country;
			timeZone.innerHTML = response.location.tz_id;
			localTime.innerHTML = response.location.localtime;
			weatherCondition.innerHTML = response.current.condition.text;
			if (response.current.is_day == 1) {

				isDay.innerHTML = "Yes";
				document.querySelectorAll("img")[0].setAttribute("src", "photos/photo_6170104512711341404_y.jpg");
				document.querySelectorAll("img")[1].setAttribute("src", "photos/photo_6170104512711341404_y.jpg");
			}
			else {
				isDay.innerHTML = "No";
				document.querySelectorAll("img")[0].setAttribute("src", "photos/jackson-hendry-eodA_8CTOFo-unsplash.png");
				document.querySelectorAll("img")[1].setAttribute("src", "photos/jackson-hendry-eodA_8CTOFo-unsplash.png");
			}
			const error = response.error;


		})
}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeatherDetails(cityName.value)
})

getWeatherDetails("New Delhi")

function validatePhoneNumber(input_str) {
	var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	return re.test(input_str);
}

function validate() {
	var phone = document.getElementById("inputNumber").value;
	if (validatePhoneNumber(phone)) {
		document.getElementById("phone_error").classList.add('hidden');
		alert("Validation Success");
		e.preventDefault();
	}
	else {
		document.getElementById("phone_error").classList.remove('hidden');
		e.preventDefault();
	}
}
// e.preventDefault();
// .fail(() => {
// 	alert("City doesn't Exist!!");
// })
// .catch(function(err)
// {
// 	alert("Error");
// });
// .catch(error=>{
// 	console.log(error.response);
// })
