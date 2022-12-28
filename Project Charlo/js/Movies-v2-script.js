let movieDB = "http://www.omdbapi.com/?apikey=ef00893c&";
let searchAttrubite = "s=";
let imdbIDAttrubite = "i=";
let pageAttrubite = "page=";
const vue = new window.Vue({
  el: "#vue",
  data: () => ({
    movies: [],
    selectedMovie: {},
    pageCount: 0,
    searchResult: "",
    movieQuery: "",
    showButtons: false,
  }),
  methods: {
    input() {
      this.searchResult = this.movieQuery;
      this.movieQuery = "";
      let movieDBfetch = movieDB + searchAttrubite + this.searchResult;
      fetch(movieDBfetch)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.movies = data.Search;
          this.result = data.totalResults;
          this.pageCount = Math.ceil(this.result / 10);
          this.selectMovie(this.movies[0].imdbID);
        });
    },
    selectMovie(movie) {
      let imdbID = movieDB + imdbIDAttrubite + movie;
      fetch(imdbID)
        .then((response) => {
          return response.json();
        })
        .then((imdbdata) => {
          this.selectedMovie = imdbdata;
        });
      this.showButtons = true;
    },
    page(pageNumber) {
      let pageCounter =
        movieDB +
        searchAttrubite +
        this.searchResult +
        "&" +
        pageAttrubite +
        pageNumber;
      fetch(pageCounter)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.movies = data.Search;
          this.selectMovie(this.movies[0].imdbID);
        });
    },
  },
});
