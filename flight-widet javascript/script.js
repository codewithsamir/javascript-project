const tablebody = document.getElementById("table-body")

let flights = [
    {
        time: "08:11",
        destination: "oman",
        flight: "ox 203",
        gate: "a 01",
        remarks: "on time"
    },
    {
        time: "09:11",
        destination: "london",
        flight: "ox 263",
        gate: "a 02",
        remarks: "on time"
    },
    {
        time: "10:11",
        destination: "dubai",
        flight: "dxb 303",
        gate: "c 12",
        remarks: "cancelled"
    },
    {
        time: "11:11",
        destination: "frankfurt",
        flight: "fr 403",
        gate: "B 02",
        remarks: "cancelled"
    },
    {
        time: "12:11",
        destination: "nepal",
        flight: "np 503",
        gate: "c 12",
        remarks: "on time"
    },
    {
        time: "13:11",
        destination: "tokyo",
        flight: "tk 211",
        gate: "a 32",
        remarks: "Delayed"
    },
]

const destinations = ["TOKYO",'FRANKFURT','DUBAI','LONDON','OMAN','BEIRUI','NEPAL','INDIA','RUSSIA','CHINA','SHRILANKA']
const   remarks = ['ON TIME',"DELAYED",'CANCELLED']
let hour = 15

function populatetable() {
    for (const flight of flights) {
        const tablerow = document.createElement("tr")

        for (const flightdetail in flight) {
            const tablecell = document.createElement("td")
            const word = Array.from(flight[flightdetail])
            //    tablecell.innerText = flight[flightdetail][0]
            for (const [index, letter] of word.entries()) {
                const letterelement = document.createElement("div")
                setTimeout(() => {

                    letterelement.classList.add("flip")
                    letterelement.textContent = letter
                    tablecell.append(letterelement)
                }, 100 * index)

            }
            tablerow.appendChild(tablecell)
           // console.log("flightdetail", flightdetail)
        }

        tablebody.append(tablerow)
    }
}
populatetable()

function generateRandomLetter(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() *alphabet.length))
}
function generateRandomnumber(maxNumber){
    const number = "1234567890"
    if(maxNumber){
        const newNumber = number.slice(0,maxNumber)
    return newNumber.charAt(Math.floor(Math.random() * newNumber.length))

    }
    return number.charAt(Math.floor(Math.random() *number.length))

}
function generateTime(){
    let displayhour = hour
    if(hour< 24){
        hour++
    }
    if(hour>=24){
        hour=1
        displayhour=hour
    }
    if(hour < 10){
        displayhour = "0"+ hour
    }
    return displayhour+ ": "+generateRandomnumber(5) + " " + generateRandomnumber() 
}
function shuffleup(){
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter()+generateRandomLetter()+""+generateRandomnumber()+generateRandomnumber(),
        gate: generateRandomLetter()+generateRandomnumber()+generateRandomnumber(),
        remarks:  remarks[Math.floor(Math.random() *  remarks.length)],
    })
    tablebody.textContent = ""
    populatetable()
}

setInterval(shuffleup,3000)
