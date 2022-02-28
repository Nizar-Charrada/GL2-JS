const submi = document.getElementById("submit");
const dis = document.querySelector(".items");

const createElement = () => {

    let text = document.querySelector("#text").value;
    let date = document.querySelector("#date").value;
    
    const element = document.createElement("div");
    element.classList.add("newitem")
    const bt = document.createElement("input")
    bt.type = 'button'
    bt.value = 'remove'
  
    const newContent = document.createTextNode(date + " : " + text + " ");

    element.append(newContent);
    element.append(bt);
    element.querySelector("input").addEventListener("click", () => {
    dis.removeChild(element);
    })
    return element;
    
    
}
submi.addEventListener("click", () => {
    const element = createElement();
    dis.appendChild(element);
});




