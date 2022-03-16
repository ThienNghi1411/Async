var colName = document.querySelector(".name-col");
var colCapital = document.querySelector(".capital-col");
var colFlag = document.querySelector(".flag-col");
var colCurrency = document.querySelector(".currency-col");
var colPopulation = document.querySelector(".population-col")
var colIndex = document.querySelector(".index-col")

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // sort A -> Z
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j++) {
        if (data[i].name.common > data[j].name.common) {
          let tmp = data[i];
          data[i] = data[j];
          data[j] = tmp;
        }
      }
    }
    data.forEach((ele , ind) => {
      console.log(ind);
      //country
      let country = document.createElement("div");
      country.classList.add("element", "ele-Country");
      country.innerText = ele.name.common;
      //capital
      let capital = document.createElement("div");
      capital.classList.add("element", "ele-Capital");
      capital.innerText = ele.capital;
      //flag
      let flag = document.createElement("div");
      flag.classList.add("element", "img-cont");
      let tmp = `            
      
        <img src="${ele.flags.svg}" alt="" srcset="">
   
      `;
      flag.innerHTML=tmp;
      
      //currency
      let currency = document.createElement("div");
      currency.classList.add("element", "ele-Currency");
     
      if (typeof ele.currencies !== "undefined"){
        currency.innerText = Object.keys(ele.currencies)[0]+"-"+Object.values(ele.currencies)[0].name+"-"+Object.values(ele.currencies)[0].symbol
      }else{
        currency.innerText = "unknown"
      }
      //population
      let population = document.createElement("div");
      population.classList.add("element", "ele-Population");
      population.innerText = (ele.population).toLocaleString();
      //Index
      let index = document.createElement("div");
      index.classList.add("element", "ele-index");
      index.innerText = ind+1;

      colName.appendChild(country);
      colCapital.appendChild(capital);
      colFlag.appendChild(flag);
      colCurrency.appendChild(currency)
      colPopulation.appendChild(population)
      colIndex.appendChild(index);
    });
    // console.log(data[0].name.common)
    // console.log(data[0].capital[0])
  });
