// LOADER 
// const loader = document.querySelector('.loader');

// window.addEventListener('load', ()=>{
   
// loader.classList.add('fondu-out');
// })






const imageList = document.querySelectorAll(".grid-images > img");
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
const currentPlanet = location.search.split("=")[1];



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
      for (let i=0; i<data.length; i++){
          if (currentPlanet == data[i].name){
            p.innerHTML = data[i].name.toUpperCase();
            p2.innerHTML = data[i].name.toUpperCase();
            d.innerHTML = data[i].description;
            locImg.src = data[i].image;
            locImg.alt = `Image ${data[i].name}`;
            locName.innerHTML = data[i].location.toUpperCase();
            l.innerHTML = `Langue(s) : ${data[i].language}`;
            a.innerHTML = `Hébergement(s) : ${data[i].accomodation}`;
            c.innerHTML = `Monnaie(s) : ${data[i].currencies}`;
            s.innerHTML = `A voir : ${data[i].see}`;
            r.innerHTML = `Population(s) : ${data[i].residents}`;
            t.innerHTML = `Pour les voyageurs : ${data[i].traveler}`;
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


// getPlanetPrez()

if(location.href.split("/")[3].split(".")[0] ==="Planets"){
  currentPlanet = location.search.split("=")[1];
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

const body = document.querySelector("body");
body.addEventListener('mouseenter',(event) =>{
  let infoBulleList = document.querySelector("#grid-images > div > div");
  infoBulleList.forEach((info_bulle) =>{
    info_bulle.classList.add("hide");
  })
})
const elementsMouseover = document.querySelectorAll('.mouseover');


elementsMouseover.forEach(element => {
 
  element.addEventListener('mouseenter', (event) => {

    console.log('entrée', event.target);

    fetch( "planets.json")
    .then(response => response.json())
    .then(data =>{

      let id,langue,climat,voyageur;
      

      for(let i = 0; i < data.length; i++){

        if(event.target.name  === data[i].name){

         id =  data[i].id;
         langue = data[i].language;
         voyageur = data[i].traveler;
         break;
        }

      }
      
      fetch(`https://swapi.dev/api/planets/${id}`)
      .then(response => response.json())
      .then(data =>{
      console.log(data)

      
       let info_bulle = document.querySelector(`#${event.target.name}>div`);
       info_bulle.innerHTML = "";
       info_bulle.classList.remove("hide");


      
      if(langue !== null){
        info_bulle.innerHTML += `<p>Langue : ${langue}</p>`;
        
      }
      if(climat !== null){
        info_bulle.innerHTML += `<p>Climat :${data.climate}</p>`;
      }
      if(voyageur !== null){
        info_bulle.innerHTML += `<p>Voyageur : ${voyageur}</p>`;
      }
      

      })

      


    })

  });
});

elementsMouseover.forEach(element =>{

element.addEventListener('mouseleave', (event) =>{

let info_bulle = document.querySelector(`#${event.target.name}>div`);  

info_bulle.classList.add("hide");
console.log(info_bulle)

})


});







