const apiKey = "4e3aafa51f2d0d17e71cbe8615bf9884";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search button");
 const weatherIcone = document. querySelector(".weatherIcone");


async function checkWheather(city) {
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   var data = await response.json();

   console.log(data);

       document.querySelector(".city").innerHTML = data.name;
       document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +  "°c" ;
       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
       document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"  ;


       if(data.weather[0].main == "Clouds"){
            weatherIcone.src = "images/clouds.png";
       }
       
       if(data.weather[0].main == "Clear"){
            weatherIcone.src = "images/clear.png";
       }
       
       if(data.weather[0].main == "Rain"){
            weatherIcone.src = "images/rain.pmg";
       }
       
       if(data.weather[0].main == "Drizzle"){
            weatherIcone.src = "images/drizzle.png";
       }
       
       if(data.weather[0].main == "Mist"){
            weatherIcone.src = "images/mist.png";
       }





}


searchBtn.addEventListener("click", ()=>{
  const city = searchBox.value;
  checkWheather(city);
})

checkWheather();  