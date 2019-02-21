var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random1 = document.querySelector(".random1");
var random2 = document.querySelector(".random2");
var a;

function setGradient() {
   body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value +")"; 
    css.textContent = body.style.background +";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random1.addEventListener("click", function() {
    a = Math.round(Math.random()*1000000);
    random1 = "#" + a;
    color1.value = random1;
    body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value +")"; 
    css.textContent = body.style.background +";"; 
})

random2.addEventListener("click", function() {
    a = Math.round(Math.random()*1000000);
    random2 = "#" + a;
    color2.value =random2;
    body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value +")"; 
    css.textContent = body.style.background +";";
})
