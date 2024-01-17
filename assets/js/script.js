


// This is team header clicking function 
let consult = document.querySelector("#consulat");
let team = document.querySelector("#fullTeam");

let cosult_desc = document.querySelector(".consultants");
let team_desc = document.querySelector(".our_full_team");

consult.addEventListener("click", function(){
    if(cosult_desc.classList.contains("hide")){
        cosult_desc.classList.remove("hide");
        team_desc.classList.add("hide");
    }
})
team.addEventListener("click", function(){
    if(team_desc.classList.contains("hide")){
        team_desc.classList.remove("hide");
        cosult_desc.classList.add("hide");
    }
})