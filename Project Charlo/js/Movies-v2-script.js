let movieDB =
  "http://www.omdbapi.com/?apikey=ef00893c&s=transformers&page= `$wew`";
window.addEventListener("DOMContentLoaded", () => {
  const vue = new window.Vue({
    el: "#vue",
    data: () => ({
      movies: [],
      selectedMovie: {},
      pageCount: "",
      searchResult: "",
    }),
    created() {
      fetch(movieDB)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.movies = data.Search;
          this.result = data.totalResults;
          this.pageCount = Math.ceil(this.result / 10);
          console.log(this.pageCount);
          this.selectMovie(this.movies[0].imdbID);
          this.searchResult = "";
        });
    },
    methods: {
      selectMovie(movie) {
        let imdbID = "http://www.omdbapi.com/?apikey=ef00893c&i=" + movie;
        fetch(imdbID)
          .then((response) => {
            return response.json();
          })
          .then((imdbdata) => {
            this.selectedMovie = imdbdata;
          });
      },
      page(wew) {
        let movieDB = `http://www.omdbapi.com/?apikey=ef00893c&s=game&page=${wew}`;
        fetch(movieDB)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.movies = data.Search;
            this.selectMovie(this.movies[0].imdbID);
          });
      },
      input() {
        let finder = document.getElementById("inputField");
        this.searchResult = finder.value;
        console.log(this.searchResult);
        finder.value = "";
      },
    },
  });
});
