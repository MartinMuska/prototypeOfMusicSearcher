// loop for add genres to array
let allMainGenres = []
for (let b = 0; b < bands.length; b++) {
    for (let a = 0; a < bands[b].albums.length; a++) { 
            for (let mg = 0; mg < bands[b].albums[a][3].length; mg++) {
                allMainGenres.push(bands[b].albums[a][3][mg])
        }
    }
}

// function for transfer array to object
let countMainGenresObject = {};
function counterOfGenres(genre) {
    for(var i = 0; i < genre.length; i++) {
        if(countMainGenresObject[genre[i]] != null) {
            countMainGenresObject[genre[i]] += 1;
        } else {
            countMainGenresObject[genre[i]] = 1;
        }
    }
}
counterOfGenres(allMainGenres)

// function for transfer object to array of objects
let countMainGenresArray = []
function converterToArray(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            countMainGenresArray.push({genre: key, count: object[key]})
        }
    }
}
converterToArray(countMainGenresObject)

// function for extract to html
function createListOfMainGenres() {
    const genresList  = document.getElementById('content-main_genres');
    countMainGenresArray.sort((a, b) => b.count - a.count).forEach((el) => {
        if (el.genre === "rock") {
            genresList.innerHTML += `<b>classic ${el.genre} music:</b> ${el.count} <br>`;
        } else if (el.genre === "alternative") {
            genresList.innerHTML += `<b>${el.genre}/modern rock:</b> ${el.count} <br>`;
        } else {
            genresList.innerHTML += `<b>${el.genre} music:</b> ${el.count} <br>`;
        }
    });
  };
  createListOfMainGenres();

const xArray = [];
const yArray = [];
const colorArray = []; 

// Objekt mapující žánry na barvy
const genreColorMap = {
    'metal': '#FC621E',
    'rock': 'orange',
    'avant-garde': 'DarkKhaki',
    'pop': 'pink',
    'jazz/fusion': 'green',
    'hip-hop/rap': 'red',
    'industrial': 'darkblue',
    'eletronic': 'MediumSlateBlue',
    'folk': 'yellow',
    'blues': '55aaff',
    'noise': 'DimGray',
    'classical': 'Lavender',

};

for(x = 0; x < countMainGenresArray.length ; x++) {
    xArray.push(countMainGenresArray[x].count)
    // Přidejte barvu pro každý sloupec podle mapování žánrů na barvy
    colorArray.push(genreColorMap[countMainGenresArray[x].genre] || 'defaultBarva'); 
}   
for(y = 0; y < countMainGenresArray.length ; y++) {
    yArray.push(countMainGenresArray[y].genre)
}  

let yArray2 = []
for (let element of yArray) {
    if (element === "rock") {
        yArray2.push("classic rock")
    } else if (element === "alternative") {
        yArray2.push("alternative/modern rock")
    } else {
        yArray2.push(element)
    }
}


const data = [{
    x: xArray.reverse(),
    y: yArray2.reverse(),
    type: "bar",
    orientation: "h",
    marker: {color: colorArray.reverse()} // přiřaďte pole barev
}];
  
const layout = {
    title: {
        text:"Music Genres",
        font: {
            size: 28, 
            family: 'calibri', 
            bold: true, 
        },
    y: 0.92     
    },
    xaxis: {
        tickfont: {
            size: 15.5, 
            family: 'calibri', 
            bold: true 
        }
    },
    yaxis: {
        tickfont: {
            size: 15.5, 
            family: 'calibri', 
            bold: true 
        }
    },
    width: 800, 
    height: 700,
    plot_bgcolor: "DarkGray",
    margin: {
        l: 200,  // Left margin
        r: 0,   // Right margin
        b: 50,   // Bottom margin
        t: 100,  // Top margin
        pad: 4   // Padding around the plot area
    }
};
  
Plotly.newPlot("myPlot", data, layout);