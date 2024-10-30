let lights = document.getElementsByClassName("light");
let colourset = ["v", "i", "b", "g", "y", "o", "r"];
let colourslow = ["vs", "is", "bs", "gs", "ys", "os", "rs"];
let b1 = document.getElementById("a1");
let b2 = document.getElementById("a2");
let b3 = document.getElementById("a3");
let b4 = document.getElementById("a4");
let b5 = document.getElementById("a5");

let randarr = [];
for (let i = 0; i < lights.length; i++) {
    randarr[i] = Math.floor(Math.random() * 7);
}

b1.onclick = function lighting1() {
    for (const i in lights) {
        lights[i].classList.toggle("VIBGYOR");
    }
}

b2.onclick = function lighting1() {
    for (const i in lights) {
        lights[i].classList.toggle(colourset[randarr[i]]);
    }
}

b3.onclick = function lighting1() {
    for (const i in lights) {
        setTimeout(() => {
            lights[i].classList.toggle("VIBGYOR");
        }, i * 1000);
    }
}

b4.onclick = function lighting1() {
    for (const i in lights) {
        setTimeout(() => {
            lights[i].classList.toggle(colourslow[i % 7]);
        }, i * 500);
    }
}

b5.onclick = function lighting1() {
    for (const i in lights) {
        setTimeout(() => {
            if (i % 3 == 0)
                lights[i].classList.toggle("VIBGYOR");
            else if (i % 3 == 1)
                lights[i].classList.toggle(colourslow[i % 7]);
            else
                lights[i].classList.toggle(colourset[randarr[i]]);
        }, i * 500);
    }
}