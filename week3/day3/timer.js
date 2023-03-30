let timerBttn = getElementById('timerBttn')
timerBttn.AddEventListener('click', function() { 
    let seconds = parseInt(document.getElementById("seconds").value);
    let timer = document.getElementById("timer");
    timer.innerHTML = seconds
    let intervalId = window.setInterval(function() {
        counter--
        console.log(counter)
        if(counter == 0) {
            window.clearInterval(intervalId)
        }
    }, 1000)
})