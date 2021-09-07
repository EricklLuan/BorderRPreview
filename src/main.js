const ranges = document.querySelectorAll('.square');
const square = document.querySelector('.result');

function rangeChange(event) {
    if (event.target.name === "0") square.style.cssText += `border-top-left-radius: ${event.target.value}px;`
    else if (event.target.name === "1") square.style.cssText += `border-top-right-radius: ${event.target.value}px;`
    else if (event.target.name === "2") square.style.cssText += `border-bottom-right-radius: ${event.target.value}px;`
    else if (event.target.name === "3") square.style.cssText += `border-bottom-left-radius: ${event.target.value}px;`
}