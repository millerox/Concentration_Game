/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Timer{
    
    countdown(timeInMinutes){
   
        let minutes, seconds;
        var timeInMillisec = timeInMinutes * 60 * 1000;

        var endDate = new Date().getTime()+ timeInMillisec;

        if (isNaN(endDate)) {
              return;
        }

        var timer = setInterval(calculate, 1000);

        function calculate() {

            let startDate = new Date();
            startDate = startDate.getTime();

            let timeRemaining = parseInt((endDate - startDate) / 1000);

            if (timeRemaining >= 0) 
            {
              minutes = parseInt(timeRemaining / 60);
              timeRemaining = (timeRemaining % 60);

              seconds = parseInt(timeRemaining);

              document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
              document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
            } 
            else 
            {
              document.getElementById("gamename").innerHTML = "<p>GAME OVER</p>";
              document.getElementById("timer").innerHTML = "<a href='#' onclick='window.location.reload(true)'>Start again</a>";
              b_Time = true;
            }
        }
    }
}
