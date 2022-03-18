var colName = document.querySelector(".name-col");
var colCapital = document.querySelector(".capital-col");
var colFlag = document.querySelector(".flag-col");
var colCurrency = document.querySelector(".currency-col");
var colPopulation = document.querySelector(".population-col");
var colIndex = document.querySelector(".index-col");
// get button
var btnAmerica = document.querySelector(".opt-America");
var btnAsia = document.querySelector(".opt-Asia");
var btnAfrica = document.querySelector(".opt-Africa");
var btnEurope = document.querySelector(".opt-Europe");
var btnOceania = document.querySelector(".opt-Oceania");
var btnAll = document.querySelector(".opt-All");
var btns = document.querySelectorAll("button")
// loader
const loader = document.querySelector("#loading");
// showing loading
function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}

function hideLoading() {
    loader.classList.remove("display");
}
// Query Region
const setActiveClass = (cls) => {
   btns.forEach( (btn) => {
       if(btn.classList.contains("active")){
           btn.classList.remove("active");
       }
   })
   cls.classList.add("active");
}

const resetAfterChoice = () => {
  let tmp = document.createElement("div");
  tmp.classList.add("title-col");
  while (colName.hasChildNodes()) {
    colName.removeChild(colName.firstChild);
  }
  tmp.innerText = "Name of Country";
  colName.appendChild(tmp);
  //
  let capital = document.createElement("div");
  capital.classList.add("title-col");
  while (colCapital.hasChildNodes()) {
    colCapital.removeChild(colCapital.firstChild);
  }
  capital.innerText = "Capital";
  colCapital.appendChild(capital);
  //
  let flag = document.createElement("div");
  flag.classList.add("title-col");
  while (colFlag.hasChildNodes()) {
    colFlag.removeChild(colFlag.firstChild);
  }
  flag.innerText = "Flag";
  colFlag.appendChild(flag);
  //
  let currency = document.createElement("div");
  currency.classList.add("title-col");
  while (colCurrency.hasChildNodes()) {
    colCurrency.removeChild(colCurrency.firstChild);
  }
  currency.innerText = "Currency";
  colCurrency.appendChild(currency);
  //
  let index = document.createElement("div");
  index.classList.add("title-col");
  while (colIndex.hasChildNodes()) {
    colIndex.removeChild(colIndex.firstChild);
  }
  index.innerText = "Index";
  colIndex.appendChild(index);
  //
  let population = document.createElement("div");
  population.classList.add("title-col");
  while (colPopulation.hasChildNodes()) {
    colPopulation.removeChild(colPopulation.firstChild);
  }
  population.innerText = "Population";
  colPopulation.appendChild(population);
};

const getRegionOrGetAll = (region) => {
    displayLoading()
    resetAfterChoice();
    let url = "" ;
    if (region !== "All"){
        url = `https://restcountries.com/v3.1/region/${region}`
    }else{
        url = "https://restcountries.com/v3.1/all"
    }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        hideLoading();
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
      data.forEach((ele, ind) => {
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
        flag.innerHTML = tmp;

        //currency
        let currency = document.createElement("div");
        currency.classList.add("element", "ele-Currency");

        if (typeof ele.currencies !== "undefined") {
          currency.innerText =
            Object.keys(ele.currencies)[0] +
            "-" +
            Object.values(ele.currencies)[0].name +
            "-" +
            Object.values(ele.currencies)[0].symbol;
        } else {
          currency.innerText = "unknown";
        }
        //population
        let population = document.createElement("div");
        population.classList.add("element", "ele-Population");
        population.innerText = ele.population.toLocaleString();
        //Index
        let index = document.createElement("div");
        index.classList.add("element", "ele-index");
        index.innerText = ind + 1;

        colName.appendChild(country);
        colCapital.appendChild(capital);
        colFlag.appendChild(flag);
        colCurrency.appendChild(currency);
        colPopulation.appendChild(population);
        colIndex.appendChild(index);
      });
      // console.log(data[0].name.common)
      // console.log(data[0].capital[0])
    });
};

btnAfrica.addEventListener("click", () => {
    setActiveClass(btnAfrica);
    getRegionOrGetAll("africa");

})

btnAsia.addEventListener("click", () => {
    setActiveClass(btnAsia);
    getRegionOrGetAll("asia");
});

btnEurope.addEventListener("click", () => {
    setActiveClass(btnEurope);
    getRegionOrGetAll("europe");

})

btnAmerica.addEventListener("click", () => {
    setActiveClass(btnAmerica);
    getRegionOrGetAll("america");
});

btnAll.addEventListener("click", () => {
    setActiveClass(btnAll);
    getRegionOrGetAll("All");
});

btnOceania.addEventListener("click", () => {
    setActiveClass(btnOceania);
    getRegionOrGetAll("oceania");
});

// first load
getRegionOrGetAll("All");




