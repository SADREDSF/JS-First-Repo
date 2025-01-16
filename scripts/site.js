const seconds = (new Date()).getSeconds()

const p = document.querySelector('p')
const h1 = document.querySelector('h1')
console.log(h1)

h1.textContent = "hi"

setTimeout(() => {
p.textContent = 'Servando' + seconds
}, 2000)

setTimeout(() => {
    if(h1)
    {
        p.style.color = '#990000'
    }
    else
    {
        p.style.color = '#00CC00'
    }
}, 3000)