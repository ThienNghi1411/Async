var colName = document.querySelector(".name-col");
var colCapital = document.querySelector(".capital-col");
var colFlag = document.querySelector(".flag-col");
console.log(colFlag)
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // sort A -> Z
    for (let i = 0; i < data.length; i++) {
      for (j = i + 1; j < data.length; j++) {
        if (data[i].name.common > data[j].name.common) {
          let tmp = data[i];
          data[i] = data[j];
          data[j] = tmp;
        }
      }
    }
    data.forEach((ele) => {
        console.log(ele);
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
      let tmp = `            
      <div class="element img-cont">
        <img src="${ele.flags.svg}" alt="" srcset="">
      </div>
      `;
      flag.innerHTML=tmp;
      
      //
      colName.appendChild(country);
      colCapital.appendChild(capital);
      colFlag.appendChild(flag);
    });
    // console.log(data[0].name.common)
    // console.log(data[0].capital[0])
  });
