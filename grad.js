const btn = document.getElementById("btn");
const color = document.querySelector(".color");

  

btn.addEventListener("click", function(){
    let rgb1 ="";
    let rgb2="";
    let ang="";
    for (var i = 0; i < 1; i++) {
        rgb1 = getRandomRgb1();
        rgb2 = getRandomRgb2();
        ang = angle();
        console.log(getRandomRgb1());
        console.log(getRandomRgb2());
        console.log(angle());

    }
    var gradient = "linear-gradient(" + ang + "deg, " + rgb1 + ", " + rgb2 + ")";
color.textContent = ("linear ,"+ ang + "," +rgb1+ "," +rgb2+"");
document.body.style.background = gradient; 
});

function getRandomRgb1() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
function getRandomRgb2() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
function angle(){
    var ang = Math.floor(Math.random()*90);
    return ang;
}