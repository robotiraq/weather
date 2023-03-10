let weatherAPI =
  "https://api.weatherapi.com/v1/forecast.json?key=e0305ee9ac75401a9c7202316230701&";
let weatherAPIquery = "q=";
let forcastDays = "&days=5";

const vue = new window.Vue({
  el: "#vue",
  data: () => ({
    weatherResponse: {},
    weatherAPIcity: "",
    isFetched: false,
    cities: [
      "Baghdad",
      "Basra",
      "Erbil",
      "Al-Anbar",
      "Dhi Qar",
      "Al-Qādisiyyah",
      "Diyala",
      "Duhok",
      "Karbala",
      "Kirkuk",
      "Maysan",
      "Muthanna",
      "Najaf",
      "Ninawa",
      "Salah Al-Din",
      "Sulaymaniyah",
      "Wasit",
    ],
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    activateCityDropdown: false,
  }),
  created() {
    this.searchForWeather(this.cities[0]);
  },
  methods: {
    searchForWeather(city) {
      fetch(weatherAPI + weatherAPIquery + city + forcastDays)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.weatherResponse = data;
          console.log(this.weatherResponse);
          this.isFetched = true;
          this.activateCityDropdown = false;
        });
    },
    selectBackground(wew) {
      if (wew == "Mist" || wew == "Fog") {
        return "images/bg-mist.jpg";
      } else if (wew == "Clear" || wew == "Sunny") {
        return "images/bg-clear.jpg";
      } else {
        return "images/bg.jpg";
      }
    },
    activateDropdown() {
      this.activateCityDropdown = !this.activateCityDropdown;
    },
  },
});
