// loop for add genres to array
let allGenresArray = [];
for (let b = 0; b < bands.length; b++) {
    for (let a = 0; a < bands[b].albums.length; a++) { 
            for (let g = 0; g < bands[b].albums[a][1].length; g++) {
                allGenresArray.push(bands[b].albums[a][1][g].toLocaleLowerCase());
        }
    }
}

// function for transfer array to object
let allGenresObject = {};
function counterOfGenres(genre) {
    for(var i = 0; i < genre.length; i++) {
        if(allGenresObject[genre[i]] != null) {
            allGenresObject[genre[i]] += 1;
        } else {
            allGenresObject[genre[i]] = 1;
        }
    }
}
counterOfGenres(allGenresArray);

// function for transfer object to array of objects
let allGenresArrayOfObjects = []
function converterToArrayOfObjects(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            allGenresArrayOfObjects.push({genre: key, count: object[key]});
        }
    }
}
converterToArrayOfObjects(allGenresObject);

// function for extract to html
function createListOfGenres() {
    const genresList  = document.getElementById('content-genres');
    allGenresArrayOfObjects.sort((a, b) => b.count - a.count).forEach((el) => {
      genresList.innerHTML += `<b>${el.genre}:</b> ${el.count}<br>`;
    });
  };
  createListOfGenres();