
var body = document.querySelector('body');
var card = document.querySelector('.card');
var input = document.querySelector('.card_search input');
var city = document.querySelector('.card_content_name');
var country = document.querySelector('.card_content_country');

var date = document.querySelector('.card_time');

var temp = document.querySelector('.card_content_temputure_value');


var shortDesc = document.querySelector('.card_content_shortdesc');

var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var cloud = document.querySelector('.cloud span');

input.addEventListener('keydown',function(e)
{
    if(e.key=='Enter')
    {
        getWeather(e.target.value);
    }
})

 async function getWeather(search) {
   await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`)
  .then(response => response.json())
  .then(data => {
    visibility.innerHTML = data.visibility + '(m)';
    wind.innerHTML = data.wind.speed + '(m/s)';
    cloud.innerHTML = data.main.humidity + '(%)';
    shortDesc.innerHTML = data.weather[0].main;
    
    temp.innerHTML = Math.round(data.main.temp);
    
    city.innerHTML = data.name;
    country.innerHTML = data.sys.country;
    date.innerHTML = new Date().toLocaleString()
    console.log(data);
    let a = Math.round(data.main.temp)
    if(a > 20)
    {
        body.setAttribute('class','hot')
        card.setAttribute('class','card hot')
        
    }
    if( a <20 )
    {
        body.setAttribute('class','cold')
        card.setAttribute('class','card cold')
    }
  });
}
getWeather('hanoi')
