const profiles = document.querySelectorAll(".category>div");
const jsonFile = JSON.parse(localStorage.getItem("jsonData"));

for (let i = 0; i < profiles.length; i++) {
    profiles[i].innerHTML = "";
    for (let j = 0; j < jsonFile.length; j++) {
        if (profiles[i].id === jsonFile[j].traveler){
            profiles[i].innerHTML+=`<img src="${jsonFile[j].icone}"  alt="Image ${jsonFile[j].name} name="${jsonFile[j].name}">`
        }
    }
}

console.log(profiles)

profiles.forEach((element)=>{
    element.addEventListener("click",()=>{
        window.location = `Planets.html?id=${element.firstElementChild.name}`
    })
})