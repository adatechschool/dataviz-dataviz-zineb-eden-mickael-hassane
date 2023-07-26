const apiData = JSON.parse(localStorage.getItem("apiData"));
const jsonOfPlanets = JSON.parse(localStorage.getItem("jsonData"));
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
  for (let i = 0; i < jsonOfPlanets.length; i++) {
    if (currentPlanet == jsonOfPlanets[i].name) {
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
      getPlanetData(i);
      break;
    }
  }
};
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
};
const currentPlanet = location.href.split("=")[1];
const imageToChange = document.getElementById("planeteImage");
imageToChange.src = `./Images/${currentPlanet}.png`;
imageToChange.alt = `Image ${currentPlanet}`;
getPlanetPrez();