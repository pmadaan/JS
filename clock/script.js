const timeBlock = document.querySelector("#time")
const dateBlock = document.querySelector("#date")

setInterval(() => {
    timeBlock.innerHTML = new Date().toLocaleTimeString()
    dateBlock.innerHTML = new Date().toDateString() 
}, 1000)

