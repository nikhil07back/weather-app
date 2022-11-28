
const form = document.querySelector("form")
const input = document.querySelector("input")
const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")
const p = document.querySelector("p")
const img = document.querySelector("img")
const container = document.querySelector(".container")


form.addEventListener("submit" , getData)

async function getData(e){
    e.preventDefault()

    let inputCity = input.value
    let apiKey = "9dba512d280f4ac39ed80615221606"
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputCity}&aqi=yes`)
    const data = await res.json()

    if(!data.error){
        const {text} = data.current.condition
        let cityName = data.location.name
        let celcius = data.current.temp_c
        let icon = data.current.condition.icon
        h1.innerText = cityName
        h2.innerText = `${celcius}°C `
        p.innerText = text
        
        img.setAttribute("src" , `https:${icon}`)  
        container.style.backgroundImage = `url(https://source.unsplash.com/random/900×800/?${text})`


        // Conditions
        // if(celcius <= 15 ){
        //     container.style.backgroundColor = "blue"
        // }else if(celcius <= 25){
        //     container.style.backgroundColor = "green"
        // }else if(celcius <= 35){
        //     container.style.backgroundColor = "orange"
        // }else{
        //     container.style.backgroundColor = "gray"
        // }

    }else{
        window.alert("Please Add Valid City Name")
    }
    form.reset()
}

