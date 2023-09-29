setInterval(showTime,1000);

function showTime()
{
    let time=new Date();
    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    var am_pm = "AM";

    if(hour>=12)
    {
        if(hour>12)
        {
            hour-=12;
        }
        am_pm="PM";
    }
    else if(hour==0)
    {
        hour=12;
        am_pm="AM";
    }

    // to add 0 before any hand if it is less than 10
    hour = hour <10 ?"0"+hour:hour;
    min = min <10 ?"0" + min:min;
    sec=sec<10?"0"+sec:sec;

    // this is for time in hh//mm//ss
    let currentTime= hour+":"+min+":"+sec;
    document.querySelector("#time").innerHTML=currentTime;


    // this for am or pm text
    let AM_PM = am_pm;
    document.querySelector("#am-pm").innerHTML=AM_PM;

}

showTime();