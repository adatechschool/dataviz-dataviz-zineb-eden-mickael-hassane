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
const currentPlanet = location.search.split("=")[1];

// Get image element see (Planets.html line 33)
const imageToChange = document.getElementById("planeteImage");

// Reassign value image to current image
imageToChange.src = `./Images/${currentPlanet}.png`;
