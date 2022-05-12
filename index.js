const time = document.getElementById("time");
update();
// the clock's display is updated every second
setInterval(update, 1000);

/**
 * Description: Updates the time displayed on the clock.
 * Post-Condition: The time displayed is changed to the current time.
 */
function update(){

    let date = new Date();
    time.innerHTML = formatTime(date);
    document.querySelectorAll("div")[0].dataset.text = formatTime(date);

    /**
     * Description: Returns the date as the time in an hours/minutes/seconds format along with AM or PM.
     */
    function formatTime(date) {
        let hours = date.getHours();
        let amPm = hours >= 12 ? "PM" : "AM";
        hours = (hours % 12) || 12;
        hours = addLeadingZero(hours);
        let minutes = date.getMinutes();
        minutes = addLeadingZero(minutes);
        let seconds = date.getSeconds();
        seconds = addLeadingZero(seconds);

        return `${hours}:${minutes}:${seconds} ${amPm}`
    }

    /**
     * Description: If the given number is less than 10, a leading zero is added to it.
     */
    function addLeadingZero(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }

}