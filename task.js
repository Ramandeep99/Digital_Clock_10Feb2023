var liveTime, h, m, s;

function showTime() {
    var date = new Date();
    h = date.getHours(); // 0 - 23
    m = date.getMinutes(); // 0 - 59
    s = date.getSeconds(); // 0 - 59

    if (h >= 0 && h <= 11) {
        liveTime = 'Good Morning!!';
    } else if (h >= 12 && h <= 17) {
        liveTime = 'Good Afternoon!!'
    } else if (h >= 18 && h <= 20) {
        liveTime = 'Good Evening!!'
    } else {
        liveTime = 'Good Night!!'
    }

    var session = "AM";
    // console.log(h)
    if (h == 0) {
        h = 12;
    }
    if (h == 12) {
        session = 'PM';
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    // document.getElementById("clock").innerText = time;
    // document.getElementById("clock").textContent = time;
    document.getElementById('time1').innerText = h;
    document.getElementById('time2').innerText = m
    document.getElementById('time3').innerText = s
    document.getElementById('time4').innerText = session

    document.getElementById('left2').innerHTML = liveTime

    setTimeout(showTime, 1000);
}

showTime();

// console.log(liveTime)


function convertLocalToGlobal(s) {
    // console.log(s)
    var hrs = Number(s.match(/^(\d+)/)[1])
    var format = s.substr(2, 4)
        // console.log(hrs, format)
    if (format == "PM" && hrs < 12) hrs = hrs + 12;
    if (format == "AM" && hrs == 12) hrs = hrs - 12;
    return hrs
}

const mainB = document.getElementById('mainBtn')
const quote = document.getElementById('quote')
const image = document.getElementById('image')

function majorFunction() {

    const wake = document.getElementById('wake').value
    const lunch = document.getElementById('lunch').value
    const nap = document.getElementById('nap').value
    const night = document.getElementById('night').value

    // console.log(wake)
    // console.log(lunch)
    // console.log(nap)
    // console.log(night)
    document.getElementById('timeDiv1').innerHTML = wake
    document.getElementById('timeDiv2').innerHTML = lunch
    document.getElementById('timeDiv3').innerHTML = nap
    document.getElementById('timeDiv4').innerHTML = night

    wakeStHrs = convertLocalToGlobal(wake.substr(0, 4))
    lunchStHrs = convertLocalToGlobal(lunch.substr(0, 4))
    napStHrs = convertLocalToGlobal(nap.substr(0, 4))
    nightStHrs = convertLocalToGlobal(night.substr(0, 4))

    wakeEndHrs = convertLocalToGlobal(wake.substr(7))
    lunchEndHrs = convertLocalToGlobal(lunch.substr(7))
    napEndHrs = convertLocalToGlobal(nap.substr(7))
    nightEndHrs = convertLocalToGlobal(night.substr(7))

    if (h >= wakeStHrs && h <= wakeEndHrs) {
        // change image and text according to this
        quote.innerHTML = 'Hey! It\'s morning, Wake Up. '
        image.src = './Assets/Component 30 – 1.jpg';
    }
    if (h >= lunchStHrs && h <= lunchEndHrs) {
        quote.innerHTML = 'It\'s time to lunch.'
        image.src = './Assets/Component 31 – 1.jpg';
    }
    if (h >= napStHrs && h <= napEndHrs) {
        quote.innerHTML = 'It\'s nap time. '
        image.src = './Assets/lunch_image@2x.jpg';
    }
    if (h >= nightStHrs && h <= nightEndHrs) {
        quote.innerHTML = 'Good Night!, Have a sound sleep. '
        image.src = './Assets/Component 32 – 1.jpg';
    }

}




mainB.addEventListener('click', majorFunction)