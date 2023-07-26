// LOADER

    //   // Fonction pour masquer l'élément de chargement
    //   function masquerChargement() {
    //     var chargement = document.getElementById("chargement");
    //     chargement.style.display = "none";
    // }

    // // Attendre que la page soit complètement chargée
    // window.addEventListener("load", function() {
    //     // Masquer l'élément de chargement après 3 secondes (3000 millisecondes)
    //     setTimeout(masquerChargement, 3000);
    // });
    
const requestJson = async () => {
  const response = await fetch("planets.json")
  const data = await response.json()
  console.log(data)
  return data
}

const requestApi = async (id) => {
  const response = await fetch(`https://swapi.dev/api/planets/${id}`)
  const data = await response.json()
  return data
}
const assign = async () => {
  const tomate = await requestJson()
  jsonOfPlanets.push(...(await Promise.all(tomate)))
  /*if(location.href.split("/")[3].split(".")[0] ==="Planets") {
    getPlanetPrez()
  }*/
  console.log(jsonOfPlanets,1)
  console.log(tomate,2)
  fetchPlanetsData()
}
const fetchPlanetsData = async () => { 

  console.log("jsonOfPlanets",jsonOfPlanets)
  const planetPromises = jsonOfPlanets.map((planet) => {
     return requestApi(planet.id)
     
  })
  
  console.log(jsonOfPlanets,"gt")
  apiOfPlanets.push(...(await Promise.all(planetPromises)))
  console.log(apiOfPlanets,"gei")
  localStorage.setItem("apiData", JSON.stringify(apiOfPlanets))
}
const apiOfPlanets = []
let jsonOfPlanets = []
console.log(typeof jsonOfPlanets)
assign()









const imageList = document.querySelectorAll(".grid-images img");
let planetId;
// With FOREACH
imageList.forEach((image) =>
  image.addEventListener("click", (event) => {
    window.location = `Planets.html?id=${event.target.name}`;
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
//.JSON calls
const getPlanetPrez = () => {

    let p = document.getElementById("planet");
    let p2 = document.getElementById("planet2");
    let d = document.getElementById("desc");
    let l = document.getElementById("language");
    let a = document.getElementById("accomodation");
    let c = document.getElementById("currencies");
    let s = document.getElementById("see");
    let r = document.getElementById("residents");
    let t = document.getElementById("traveler");
    let locImg = document.getElementById("locationImage");
    let locName = document.getElementById("locationName");
    console.log(jsonOfPlanets,"toto")
      for (let i=0; i<jsonOfPlanets.length; i++){
          if (currentPlanet == jsonOfPlanets[i].name){
            p.innerHTML = jsonOfPlanets[i].name.toUpperCase();
            p2.innerHTML = jsonOfPlanets[i].name.toUpperCase();
            d.innerHTML = jsonOfPlanets[i].description;
            locImg.src = jsonOfPlanets[i].image;
            locImg.alt = `Image ${jsonOfPlanets[i].name}`;
            locName.innerHTML = jsonOfPlanets[i].location.toUpperCase();
            l.innerHTML = `Langue(s) : ${jsonOfPlanets[i].language}`;
            a.innerHTML = `Hébergement(s) : ${jsonOfPlanets[i].accomodation}`;
            c.innerHTML = `Monnaie(s) : ${jsonOfPlanets[i].currencies}`;
            s.innerHTML = `A voir : ${jsonOfPlanets[i].see}`;
            r.innerHTML = `Population(s) : ${jsonOfPlanets[i].residents}`;
            t.innerHTML = `Pour les voyageurs : ${jsonOfPlanets[i].traveler}`;
            console.log(apiOfPlanets,"msi");
            getPlanetData(i);
            break
          }
      }
};


let currentPlanet;
//API calls
const getPlanetData = (index) => {

      let r = document.getElementById("rotation");
      let o = document.getElementById("orbit");
      let d = document.getElementById("diameter");
      let g = document.getElementById("gravity");
      let t = document.getElementById("terrain");
      let c = document.getElementById("climate");
          r.innerHTML = `Rotation period : ${apiData[index].rotation_period}`;
          o.innerHTML = `Orbital period : ${apiData[index].orbital_period}`;
          d.innerHTML = `Diameter : ${apiData[index].diameter}`;
          g.innerHTML = `Gravity : ${apiData[index].gravity}`;
          t.innerHTML = `Terrain : ${apiData[index].terrain}`;
          c.innerHTML = `Climate : ${apiData[index].climate}`;
 }

 


if(location.href.split("/")[3].split(".")[0] ==="Planets"){
  currentPlanet = location.href.split("=")[1];
  const imageToChange = document.getElementById("planeteImage");
 imageToChange.src = `./Images/${currentPlanet}.png`;
 imageToChange.alt = `Image ${currentPlanet}`;
 
 const apiData = JSON.parse(localStorage.getItem("apiData"))
 console.log(apiData,"xc")
 getPlanetPrez()

}

console.log(location.href.split("/")[3].split(".")[0]);

// // Get image element see (Planets.html line 33)
// const imageToChange = document.getElementById("planeteImage");

// // Reassign value image to current image
// imageToChange.src = `./Images/${currentPlanet}.png`;
// imageToChange.alt = `Image ${currentPlanet}`;



// HOVER PLANETES
let infoBulleList = document.querySelectorAll(".grid-images > div > div");

const elementsMouseover = document.querySelectorAll('.mouseover');


elementsMouseover.forEach(element => {
 element.addEventListener("mouseout",(event)=> {
  
    infoBulleList.forEach((info_bulle) =>{
      info_bulle.classList.add("hide");
    })
 })

  element.addEventListener('mouseover', (event) => {
    let index,langue,voyageur;
    console.log('entrée', event.target);
    
    
    infoBulleList.forEach((info_bulle) =>{
      info_bulle.classList.add("hide");
    })
      for(let i = 0; i < jsonOfPlanets.length; i++){

        if(event.target.name  === jsonOfPlanets[i].name){
         index =  i;
         langue = jsonOfPlanets[i].language;
         voyageur = jsonOfPlanets[i].traveler;
         break;
        }
      }
       let info_bulle = document.querySelector(`#${event.target.name}>div`);
       info_bulle.innerHTML = "";
       info_bulle.classList.remove("hide");
       info_bulle.innerHTML = `<p>Nom : ${jsonOfPlanets[index].name}</p><p>Langue : ${langue}</p><p>Climat :${apiOfPlanets[index].climate}</p><p>Voyageur : ${voyageur}</p>`
      })
    })

 














