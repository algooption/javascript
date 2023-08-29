let value=0;

document.getElementById("incrementbtn").addEventListener("Clicked",increment);
function increment() {
    document.getElementById("count").innerHTML=value++;
}

document.getElementById("decrementbtn").addEventListener("Clicked",decrement);

function decrement() {
    document.getElementById("count").innerHTML=--value;
}