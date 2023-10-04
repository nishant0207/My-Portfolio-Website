const hr = document.querySelector('.hr')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

setInterval(AnalogTime,1000);

function AnalogTime()
{
	let day = new Date()
	let hour = day.getHours()
	let minutes = day.getMinutes()
	let seconds = day.getSeconds()

	let hrrotation = (30 * hour) + (0.5 * minutes);
	let minrotation = 6 * minutes;
	let secrotation = 6 * seconds;

	hr.style.transform =
		`translate(-50%,-100%) rotate(${hrrotation}deg)`
	min.style.transform =
		`translate(-50%,-100%) rotate(${minrotation}deg)`
	sec.style.transform =
		`translate(-50%,-85%) rotate(${secrotation}deg)`
}

AnalogTime();

// Digital part
setInterval(DigitalTime,1000)

function DigitalTime()
{
	let time=new Date();
    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    am_pm = "AM";

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
    let currentTime= hour+":"+min+":"+sec+am_pm;
    document.querySelector(".digital").innerHTML=currentTime;
}

DigitalTime();