// loop for add genres to array
let allLandsArray = [];
for (let b = 0; b < bands.length; b++) {
    if(bands[b].land === undefined) {
    } else {
        allLandsArray.push(bands[b].land.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')); 
    }
}

// function for transfer array to object
let allLandsObject = {};
function counterOfLands(genre) {
    for(var i = 0; i < genre.length; i++) {
        if(allLandsObject[genre[i]] != null) {
            allLandsObject[genre[i]] += 1;
        } else {
            allLandsObject[genre[i]] = 1;
        }
    }
}
counterOfLands(allLandsArray);

// function for transfer object to array of objects
let allLandsArrayOfObjects = []
function converterToArrayOfObjects(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            allLandsArrayOfObjects.push({land: key, count: object[key]});
        }
    }
}
converterToArrayOfObjects(allLandsObject);

// function for extract to html
function createListOfLands() {
    const LandsList  = document.getElementById('content-lands');
    allLandsArrayOfObjects.sort((a, b) => b.count - a.count).forEach((el) => {
        LandsList.innerHTML += `<b>${el.land}:</b> ${el.count}<br>`;
    });
  };
  createListOfLands();