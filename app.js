const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const ampm = document.querySelector("#ampm");



function getTime() {
    const date = new Date();
    let clockampm = "AM";
    let h = date.getHours();
    if(h > 12){
        h -= 12;
        clockampm = "PM";
    }
    if (h < 10){
        h = "0"+h;
    }

    let m = date.getMinutes();
    if(m < 10) {
        m = "0"+m;
    }

    let s = date.getSeconds();
    if(s < 10){
        s = "0"+s;
    }


    hour.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    ampm.innerText = clockampm;
}

getTime();
setInterval(getTime, 1000);
