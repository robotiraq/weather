// const ul = document.getElementById("Movies");
// let input = document.getElementById("inputField");
// const list = document.createDocumentFragment();
// const url = "https://jsonplaceholder.typicode.com/users";
// let search = input;
// let movieDB = "http://www.omdbapi.com/?apikey=ef00893c&s=" + search;

function addTask() {
  let input = document.getElementById("inputField");
  let ul = document.getElementById("Movies");
  ul.innerHTML = "";
  let search = input.value;
  input.value = "";
  let movieDB = "http://www.omdbapi.com/?apikey=ef00893c&s=" + search;

  fetch(movieDB)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let movies = data.Search;

      movies.forEach(function (movie) {
        let li = document.createElement("li");
        let name = document.createElement("h2");
        let year = document.createElement("span");
        let image = document.createElement("img");

        li.className = "flex-col text-center ";
        name.innerHTML = movie.Title;
        name.className = "text-red-500 break-all";
        year.innerHTML = `${movie.Year}`;
        year.className = " p-1";
        image.src = movie.Poster;
        image.className = "rounded-lg m-auto max-h-96";

        li.appendChild(name);
        li.appendChild(year);
        li.appendChild(image);
        ul.appendChild(li);
      });
    });
}

// fetch(movieDB)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     let movies = data.Search;

//     movies.forEach(function (movie) {
//       let li = document.createElement("li");
//       let name = document.createElement("h2");
//       let email = document.createElement("span");
//       let image = document.createElement("img");

//       name.innerHTML = movie.Title;
//       email.innerHTML = `${movie.Year}`;
//       image.src = movie.Poster;

//       li.appendChild(name);
//       li.appendChild(email);
//       li.appendChild(image);
//       ul.appendChild(li);
//     });
//   });
