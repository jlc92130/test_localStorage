let bouton = document.getElementById('mode');
let span = document.querySelector('span');

function modeSombre() {
    document.body.className = "dark";
    span.textContent = "Theme clair";
    localStorage.setItem('theme', 'sombre');

}
if(localStorage.getItem('theme')){
    if(localStorage.getItem('theme') == "sombre"){
        modeSombre();
    }
}

bouton.addEventListener('click',() => {
    if(document.body.classList.contains('dark') === true) {
        document.body.className = "";
        span.textContent = "Theme sombre";
        localStorage.setItem('theme', 'clair');
    }
    else {
        modeSombre();
    }

});
