const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const circle = document.querySelector('.circle')

const getData = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        h1.textContent = `ADVICE # ${data.slip.id}`
        h2.textContent = `"${data.slip.advice}"`
        console.log(data)
    })
}

document.body.onload = getData()

circle.addEventListener('click', getData)


