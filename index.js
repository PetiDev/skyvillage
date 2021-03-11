
function elere(menuuu) {
const logbtn = document.getElementById('loginbtn');
const menbtn = document.getElementById('menubtn');
const regbtn = document.getElementById('regbtn');
const elbtn = document.getElementById('elerhetoseg');
const eler = document.getElementById(menuuu);
    eler.style.backgroundColor = "#feca57";
    switch(menuuu){
        case "menubtn":
            logbtn.style.backgroundColor = "#222f3e";
            regbtn.style.backgroundColor = "#222f3e";
            elbtn.style.backgroundColor = "#222f3e";
        break;
        case "loginbtn":
            menbtn.style.backgroundColor = "#222f3e";
            regbtn.style.backgroundColor = "#222f3e";
            elbtn.style.backgroundColor = "#222f3e";
        break;
        case "regbtn":
            logbtn.style.backgroundColor = "#222f3e";
            menbtn.style.backgroundColor = "#222f3e";
            elbtn.style.backgroundColor = "#222f3e";
        break;
        case "elerhetoseg":
            logbtn.style.backgroundColor = "#222f3e";
            regbtn.style.backgroundColor = "#222f3e";
            menbtn.style.backgroundColor = "#222f3e";
        break;
    }
}