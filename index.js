const cont = document.getElementById('contact');
const contb = document.getElementById('contbutton');
const homeb = document.getElementById('homebutton');
const home = document.getElementById('home');
const infb = document.getElementById('infobutton');
const inf = document.getElementById('info');
const men = document.getElementById('men');
const x = document.getElementById('menu');
const kepp = document.getElementById('kepp');
const bar = document.getElementById('bar');


function random_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var Color = "rgb(" + x + "," + y + "," + z + ")";
 
  
   bar.style.background = Color;
    }

kepp.onclick = (e) => {random_color()}


men.onclick = (e) => {

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        x.style.textAlign = 'center';
    }
}
function contact() {
    
    cont.style.display = "block";
    
    
    home.style.display = "none";
    
    inf.style.display = "none";

}
function hhome() {
    
    cont.style.display = "none";
    
    
    home.style.display = "block";
    
    inf.style.display = "none";
}
function info() {
    
    inf.style.display = "block";
    cont.style.display = "none";
    home.style.display = "none";
    
}
function tobej() {
    window.location = "login.html";
}
function bacho() {
    window.location = "index.html";
}
function reg() {
    window.location = "reg.html";
}