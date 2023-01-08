let weatherAPI =
  "https://api.weatherapi.com/v1/current.json?key=e0305ee9ac75401a9c7202316230701&";
let weatherAPIquery = "q=";

const vue = new window.Vue({
  el: "#vue",
  data: () => ({
    weatherResponse: {},
    weatherAPIcity: "",
    isFetched: false,
  }),
  created() {},
  methods: {
    searchForWeather(city) {
      fetch(weatherAPI + weatherAPIquery + city)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.weatherResponse = data;
          console.log(this.weatherResponse);
          this.isFetched = true;
        });
    },
  },
});
