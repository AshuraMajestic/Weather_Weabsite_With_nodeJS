const submit = document.getElementById("submitBtn");
const CityName = document.getElementById("CityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp_real_value");
const temp_status = document.getElementById("temp_status");

const dataHide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
  event.preventDefault(); // Page is not refreshed
  let cityVal = CityName.value;
  if (cityVal === "") {
    city_name.innerText = `Plz write the city name before search`;
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=be0b5b0806ddd33a0b3769489b72ce31&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        const  tempMood =  arrData[0].weather[0].main;
        // condition To check weather
        if (tempMood == "Clear") {
            temp_status.innerHTML =
              '<i class="fas fa-sun" style="color: #eccc68"></i>';
          } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
              '<i class="fas fa-cloud" style="color: #f1f2f6"></i>';
          } else if (tempMood == "Rain") {
            temp_status.innerHTML =
              '<i class="fas fa-rain" style="color: #a4b0be"></i>';
          } else {
            temp_status.innerHTML =
              '<i class="fas fa-cloud" style="color: #f1f2f6"></i>';
          }
          dataHide.classList.remove("data_hide");
        } catch {
      city_name.innerText = `plz enter the city name properly`;
    dataHide.classList.add("data_hide");

    }
  }
};

submit.addEventListener("click", getInfo);
