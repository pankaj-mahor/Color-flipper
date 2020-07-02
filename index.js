const colors = ["green","red","rgba(133,122,200)","#f12534"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", function(){
    //get random number between 0-3 colors[3]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
 

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}