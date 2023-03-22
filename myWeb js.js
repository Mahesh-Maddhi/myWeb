let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let pythonCard = document.getElementById("pythonCard");
let javaCard = document.getElementById("javaCard");
let javaScriptCard = document.getElementById("javaScriptCard");
let search = document.getElementById("search");
let displayDate = document.getElementById("date");

// search

let searchLink = document.getElementById("searchLink");
searchLink.onclick = () => {
    if (search.value !== "") {
        let url = "https://google.com/search?q=" + search.value;
        searchLink.href = url;
        searchLink.target = "_blank";
        search.value = "";
    }
    else {
        alert("Enter minimum one letter to search");
        
    }

}

// Date 
function date() {
    let d = new Date();

    let date = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();
    let day = days[d.getDay()];
    let hours = d.getHours();
    let meridian;
    if(hours >= 12){meridian = "PM"}else{meridian = "AM"}
    if(hours > 12){hours = hours % 12}
    let minutes = d.getMinutes();
    if (date < 10) { date = "0" + date }
    if (month < 10) { month = "0" + month }
    if (hours < 10) { hours = "0" + hours }
    if (minutes < 10) { minutes = "0" + minutes }
    let dateFormat = date + "-" + month + "-" + year + ", " + day + "  " + hours + ":" + minutes + " "+ meridian;
    displayDate.textContent = dateFormat;
}
date();

setInterval(() => {
    date();

}, 10000);


// cards

pythonCard.onclick = function () {
    alert("working on it, wait for a while");
}
javaCard.onclick = function () {
    alert("working on it, wait for a while");
}
javaScriptCard.onclick = function () {
    alert("working on it, wait for a while");
}
