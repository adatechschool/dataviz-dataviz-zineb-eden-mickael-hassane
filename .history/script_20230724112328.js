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

if(location.href.split("/")[3].split(".")[0]) !== StarTours)

console.log(location.href.split("/")[3].split(".")[0]);

// Get image element see (Planets.html line 33)
const imageToChange = document.getElementById("planeteImage");

// Reassign value image to current image
imageToChange.src = `./Images/${currentPlanet}.png`;
imageToChange.alt = `Image ${currentPlanet}`;

//.JSON calls
const getPlanetPrez = () => {
  fetch("planets.json")
  .then (response => response.json())
  .then((data) => {
    let p = document.getElementById("planet");
    let d = document.getElementById("desc");
      for (let i=0; i<data.length; i++){
          if (currentPlanet == data[i].name){
            p.innerHTML = data[i].name;
            d.innerHTML = data[i].description;
            getPlanetData(data[i].id);
          }
      }
    console.log(data);
  })
};



//API calls
const getPlanetData = (id) => {
  let request = `https://swapi.dev/api/planets/${id}`;

  fetch(request)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let r = document.getElementById("rotation");
      let o = document.getElementById("orbit");
      let d = document.getElementById("diameter");
      let g = document.getElementById("gravity");
      let t = document.getElementById("terrain");
      let c = document.getElementById("climate");
      console.log(data);

      
          r.innerHTML = `Rotation period : ${data.rotation_period}`;
          o.innerHTML = `Orbital period : ${data.orbital_period}`;
          d.innerHTML = `Diameter : ${data.diameter}`;
          g.innerHTML = `Gravity : ${data.gravity}`;
          t.innerHTML = `Terrain : ${data.terrain}`;
          c.innerHTML = `Climate : ${data.climate}`;
        
    //console.log(data.results);
    })
 }

getPlanetPrez()

// HOVER PLANETES

const elementsMouseover = document.querySelectorAll('.mouseover');

elementsMouseover.forEach(element => {
  element.addEventListener('mouseover', () => {
    console.log('entrée');
  });
});

