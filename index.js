// Définir les valeurs récupérer comme étant des constantes
// pour que l'action effectuer sur eux soit constant

const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const counterLb = document.getElementById("counterLb");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    counterLb.textContent = count;
}

decreaseBtn.onclick = function () {
    count--;
    counterLb.textContent = count;
}
resetBtn.onclick = function () {
    count = 0;
    counterLb.textContent = count;
}



