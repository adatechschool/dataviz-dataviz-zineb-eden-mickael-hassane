const requestJson = async () => {
  const response = await fetch("planets.json");
  const data = await response.json();
  console.log(data);
  return data;
};
const requestApi = async (id) => {
  const response = await fetch(`https://swapi.dev/api/planets/${id}`);
  const data = await response.json();
  return data;
};
const assign = async () => {
  const tomate = await requestJson();
  jsonOfPlanets.push(...(await Promise.all(tomate)));
  localStorage.setItem("jsonData", JSON.stringify(jsonOfPlanets));
  fetchPlanetsData();
};
const fetchPlanetsData = async () => {
  console.log("jsonOfPlanets", jsonOfPlanets);
  const planetPromises = jsonOfPlanets.map((planet) => {
    return requestApi(planet.id);
  });
  apiOfPlanets.push(...(await Promise.all(planetPromises)));
  localStorage.setItem("apiData", JSON.stringify(apiOfPlanets));
};
const apiOfPlanets = [];
let jsonOfPlanets = [];
assign();
const imageList = document.querySelectorAll(".grid-images img");
let planetId;
// With FOREACH
imageList.forEach((image) =>
  image.addEventListener("click", (event) => {
    if (event.target.name !== 'Donut')
    window.location = `Planets.html?id=${event.target.name}`;
  })
);
let infoBulleList = document.querySelectorAll(".grid-images > div > div");
const elementsMouseover = document.querySelectorAll(".mouseover");
elementsMouseover.forEach((element) => {
  element.addEventListener("mouseleave", (event) => {
    infoBulleList.forEach((info_bulle) => {
      info_bulle.classList.add("hide");
    });
  });
  element.addEventListener("mouseenter", (event) => {
    let index, langue, voyageur;
    infoBulleList.forEach((info_bulle) => {
      info_bulle.classList.add("hide");
    });
    for (let i = 0; i < jsonOfPlanets.length; i++) {
      if (event.target.name === jsonOfPlanets[i].name) {
        index = i;
        langue = jsonOfPlanets[i].language;
        voyageur = jsonOfPlanets[i].traveler;
        break;
      }
    }
    let info_bulle = document.querySelector(`#${event.target.name}>div`);
    info_bulle.innerHTML = "";
    info_bulle.classList.remove("hide");
    info_bulle.innerHTML = `<p>Nom : ${jsonOfPlanets[index].name}</p><p>Langue : ${langue}</p><p>Climat :${apiOfPlanets[index].climate}</p><p>Voyageur : ${voyageur}</p>`;
  });
});

function JouerSon() {
  var sound = document.getElementById("Donut");
  sound.play();
}









 














