function createListOfBands() {
  const bandsList  = document.getElementById('content-bands');
  let artistAlbums = {};

  bands.forEach((band) => {
    if (Array.isArray(band.band)) {
      band.band.forEach((artist) => {
        if (!artistAlbums[artist]) {
          artistAlbums[artist] = band.number;
        } else {
          artistAlbums[artist] += band.number;
        }
      });
    } else {
      if (!artistAlbums[band.band]) {
        artistAlbums[band.band] = band.number;
      } else {
        artistAlbums[band.band] += band.number;
      }
    }
  });

  const sortedArtists = Object.entries(artistAlbums).sort((a, b) => b[1] - a[1]);
  sortedArtists.forEach(([artist, albums]) => {
    bandsList.innerHTML += `<b>${artist}:</b> ${albums}<br>`;
  });
};
createListOfBands();

// functions for albums total
let numbersArray = []
function numbersOfAlbums() {
  for(let n = 0; n < bands.length; n++) {
    numbersArray.push(bands[n].number)
  }
}
numbersOfAlbums()

let albumsTotal = 0
for(let a = 0; a < numbersArray.length; a++){
  albumsTotal += numbersArray[a]
}
const albumsTotalElement = document.getElementById("content-bands-albums_total")
albumsTotalElement.style.paddingBottom = "0"
albumsTotalElement.innerHTML = `<b style = "text-decoration:underline;">Number of albums:</b> ${albumsTotal}`

// average albums per band
let bandsTotal = bands.length
let bandsTotalElement =   document.getElementById("content-bands-bands_total")
bandsTotalElement.style.paddingBottom = "0"
bandsTotalElement.innerHTML = `<b style = "text-decoration:underline;">Number of bands:</b> ${bandsTotal}`  

let albumsPerBand = Number((albumsTotal/bandsTotal).toFixed(2))
console.log(albumsPerBand)

const albumsPerBandElement = document.getElementById("content-bands-average")
albumsPerBandElement.innerHTML = `<b style = "text-decoration:underline;">Average albums per band:</b> ${albumsPerBand}`   

