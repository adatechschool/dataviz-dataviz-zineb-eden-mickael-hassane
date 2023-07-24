const imageList = document.querySelectorAll(".grid-images > img");
let planetId;
// With FOREACH
imageList.forEach((image) =>
  image.addEventListener("click", (event) => {
    window.location = `Planets.html?id=${event.target.id}`;
  })
);

// With FOR OF
// for(const image of imageList){
//     image.addEventListener("click", (event) => {
//         window.location = `Planets.html?id=${event.target.id}`;
//       })
// }

// With FOR LOOP
// for (let i = 0; i < imageList.length; i++) {
//   imageList[i].addEventListener("click", (event) => {
//     window.location = `Planets.html?id=${event.target.id}`;
//   });
// }

// Get current planet name within the current page adress
//const currentPlanet = location.search.split("=")[1];

if(location.href.split("/")[3].split(".")[0] ==="Planets"){
  const currentPlanet = location.search.split("=")[1];
  const imageToChange = document.getElementById("planeteImage");
 imageToChange.src = `./Images/${currentPlanet}.png`;
 imageToChange.alt = `Image ${currentPlanet}`;
 getPlanetPrez()

}

console.log(location.href.split("/")[3].split(".")[0]);

// // Get image element see (Planets.html line 33)
// const imageToChange = document.getElementById("planeteImage");

// // Reassign value image to current image
// imageToChange.src = `./Images/${currentPlanet}.png`;
// imageToChange.alt = `Image ${currentPlanet}`;



// HOVER PLANETES

const elementsMouseover = document.querySelectorAll('.mouseover');

elementsMouseover.forEach(element => {
  element.addEventListener('mouseover', () => {
    console.log('entrée');
  });
});

