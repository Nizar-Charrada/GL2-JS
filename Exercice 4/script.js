const myItem = document.querySelectorAll('li')
console.log(myItem)
myItem.forEach((el) => 
{ el.addEventListener('click' ,()=> {
    var randomColor = '#' + Math.ceil(Math.random()*16777215).toString(16);
    // 16777215 is FFFFFF converted to decimal
    el.style.color = randomColor;})})
