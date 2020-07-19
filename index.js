const colors = ["green","red","blue","rgba(133,122,200)","#f12534"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");

const container =  document.querySelector('h2');
const icon = document.querySelector('.icon');
icon.title = "Get Your Color Code";

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

icon.addEventListener('click', function(){
    container.classList.toggle('show');
})