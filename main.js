const form = document.getElementById("hi")
form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const city = e.target.search.value
    console.log(city)
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd9be3f716c73e2337654540e428bef3`)
    const data = await res.json()
    console.log(data)
    const h1=document.getElementById("name")
    h1.innerText = data.name
    const p=document.getElementById("weather")
    p.innerText = data.main.temp

})
