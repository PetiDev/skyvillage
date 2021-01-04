const cont = document.getElementById('contact');
const contb = document.getElementById('contbutton');
const homeb = document.getElementById('homebutton');
const home = document.getElementById('home');
const infb = document.getElementById('infobutton');
const inf = document.getElementById('info');
const men = document.getElementById('men');
const x = document.getElementById('menu');

men.onclick = (e) => {

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function contact() {

    cont.style.display = "block";
    contb.style.display = "none";
    homeb.style.display = "block";
    home.style.display = "none";
    infb.style.display = "block";
    inf.style.display = "none";

}
function hhome() {

    cont.style.display = "none";
    contb.style.display = "block";
    homeb.style.display = "none";
    home.style.display = "block";
    infb.style.display = "block";
    inf.style.display = "none";
}
function info() {

    inf.style.display = "block";
    cont.style.display = "none";
    home.style.display = "none";
    contb.style.display = "block";
    infb.style.display = "none";
    homeb.style.display = "block";
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