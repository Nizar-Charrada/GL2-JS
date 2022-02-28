const h = document.querySelector("h1")

const color = () => {
    let col = document.getElementById("color")
    console.log(col.value)
    h.style.color = col.value
}

const sizee = () => {
    let si = document.getElementById("size")
    console.log(si)
    h.style.fontSize = si.value + 'px'
}

const changefont = () => {
    let f = document.getElementById("font").value;
    h.style.fontFamily = f;
}

const checke = document.querySelectorAll('div input');
checke.forEach(
    (el) => {
        el.addEventListener("click", () => {
            h.style.textAlign = el.id;
        })
    }
);
