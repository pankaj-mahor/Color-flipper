const btn = document.getElementById("btn");
const color = document.querySelector(".color");

  

btn.addEventListener("click", function(){
    let rgb ="";
    for (var i = 0; i < 1; i++) {
        rgb = getRandomRgb();
    }
color.textContent = rgb;
document.body.style.backgroundColor = rgb;    
});

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}