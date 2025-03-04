let select = document.getElementById("select")
select.addEventListener("change",()=>
{
    let text = select.value
    async function checkWeather(text)
    {
        let key = "ca09e08cfa45387c008d2107d8f91e65"
        let city = `${text}`
        let fets = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        return fets
        
    }
    let prom = checkWeather(text);
    prom.then((data1)=>
    {
        return data1.json();
    })
    .then((data2)=>
    {
        let tem = data2.main.temp-273.15;
        let round = Math.round(tem)
        
        let temp = document.getElementById("temp")
        temp.textContent=`${round}`

        let place = document.getElementById("place")
        place.textContent=`${text}
        `
     
        if(round<=16)
        {
            let body = document.getElementById("body")
            body.style.backgroundImage="url('./../images copy/rains2.jpg')"
        }
        else if(round<29)
        {
            let body = document.getElementById("body")
            body.style.backgroundImage="url('./../images copy/blacky.webp')"
        }
        else
        {
            let body = document.getElementById("body")
            body.style.backgroundImage="url('./../images copy/suns.jpg')"
        }
        
    }).catch(error)
    {
        console.log(error)
    }
})