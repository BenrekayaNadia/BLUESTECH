// Dans votre fichier scripts.js




const moveBox = document.getElementById('moveBox');

function move() {
    moveBox.style.transform = 'translate(200px, 0)';
}

// Appeler la fonction move après 1 seconde
setTimeout(move, 1000);


function showSurprise() {


    
    const surprises = [
        "Bravo! Vous avez déclenché une pluie de confettis virtuels!",
        "Wouah! Une licorne magique apparaît!",
        "Tada! Un joyeux message s'affiche pour éclairer votre journée!"
    ];

    const randomIndex = Math.floor(Math.random() * surprises.length);
    alert(surprises[randomIndex]);
}
function move() {
    const elem = document.getElementById("myBar");
    let width = 1;
    const id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Appeler la fonction move après le chargement de la page
window.onload = move;

// JavaScript pour basculer l'état du bouton
function toggleButton() {
    const button = document.querySelector('.toggle-button');
    button.classList.toggle('active');
}




