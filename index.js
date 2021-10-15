var millisecs = 0;
var secs = 0;
var mins = 0;
var start_interval;
var test = false;

function start() {

    millisecs++;
    if (millisecs == 100) {
        millisecs = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    if (millisecs < 10) {

        dis_millisecs = "0" + millisecs;
    } else {
        dis_millisecs = millisecs;
    }
    if (secs < 10) {
        dis_secs = "0" + secs;

    } else {
        dis_secs = secs;
    }
    if (mins < 10) {

        dis_mins = "0" + mins;
    } else {
        dis_mins = mins;
    }

    document.getElementById("minutes").innerHTML = dis_mins;
    document.getElementById("seconds").innerHTML = dis_secs;
    document.getElementById("milliseconds").innerHTML = dis_millisecs;
    test = true;
}

document.body.addEventListener("click", () => {

    if (!test) {
        start_interval = setInterval(start, 10);
    } else {
        clearInterval(start_interval);
        test = false;
    }
});


document.body.addEventListener("dblclick", () => {

    clearInterval(start_interval);
    millisecs = 0;
    secs = 0;
    mins = 0;
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("milliseconds").innerHTML = "00";
});