function men() {
    var x = document.getElementById('menu');
    if(x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}
function contact() {
    var cont = document.getElementById('contact');
    var contb = document.getElementById('contbutton');
    var homeb = document.getElementById('homebutton');
    var home = document.getElementById('home');
    var infb = document.getElementById('infobutton');
    var inf = document.getElementById('info');
    cont.style.display = "block";
    contb.style.display = "none";
    homeb.style.display = "block";
    home.style.display = "none";
    infb.style.display = "block";
    inf.style.display = "none";

}
function home() {
    var cont = document.getElementById('contact');
    var contb = document.getElementById('contbutton');
    var homeb = document.getElementById('homebutton');
    var home = document.getElementById('home');
    var infb = document.getElementById('infobutton');
    var inf = document.getElementById('info');
    cont.style.display = "none";
    contb.style.display = "block";
    homeb.style.display = "none";
    home.style.display = "block";
    infb.style.display = "block";
    inf.style.display = "none";
}
function info() {
    var infb = document.getElementById('infobutton');
    var homeb = document.getElementById('homebutton');
    var home = document.getElementById('home');
    var contb = document.getElementById('contbutton');
    var cont = document.getElementById('contact');
    var inf = document.getElementById('info');
    inf.style.display = "block";
    cont.style.display = "none";
    home.style.display = "none";
    contb.style.display = "block";
    infb.style.display = "none";
    homeb.style.display = "block";

}