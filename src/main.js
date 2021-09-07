const ranges = document.querySelectorAll('.square');
const square = document.querySelector('.result');

ranges.forEach(range => {
    range.addEventListener('change', event => {
        if (range.name === "0") square.style.cssText += `border-top-left-radius: ${event.target.value}px;`
        else if (range.name === "1") square.style.cssText += `border-top-right-radius: ${event.target.value}px;`
        else if (range.name === "2") square.style.cssText += `border-bottom-right-radius: ${event.target.value}px;`
        else if (range.name === "3") square.style.cssText += `border-bottom-left-radius: ${event.target.value}px;`
    })
})