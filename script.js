const dateString = document.querySelector('.datee')
const stringUtc = document.querySelector('.utc')

function dates() {
    const date = new Date()
    const currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    dateString.innerHTML = currentTime;

    const utcDay = date.getUTCDay()
    let dayString;
    switch (utcDay) {
        case 0:
            dayString = 'Sunday';
            break;
        case 1:
            dayString = 'Monday';
            break;
        case 2:
            dayString = 'Tuesday';
            break;
        case 3:
            dayString = 'Wednesday';
            break;
        case 4:
            dayString = 'Thursday';
            break;
        case 5:
            dayString = 'Friday';
            break;
        case 6:
            dayString = 'Saturday';
            break;

    }
    stringUtc.innerHTML = dayString;


};


window.onload = () => {
    setInterval(dates);

};