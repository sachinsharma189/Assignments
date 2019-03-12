function time(){
    var ampm;
    var date=new Date();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
    if(hour>=00 && hour<=11)
    {
        document.getElementById("greeting").innerHTML="Good Morning";
    }
    else if(hour>=12 && hour<=15)
    {
        document.getElementById("greeting").innerHTML="Good Afternoon";
    }
    else{
        document.getElementById("greeting").innerHTML="Good Evening";
    }

    if(hour>12)
    {
        hour=hour-12;
        var ampm="PM";
    }
    else if(hour<=12)
    {
        hour=hour;
        var ampm="AM";
    }
    hour=updatetime(hour);
    minute=updatetime(minute);
    second=updatetime(second);

    document.getElementById('clock').innerHTML=hour + ":" + minute + ":" + second +"    " +ampm;
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var curDay = date.getDate();
    var curMonth = months[date.getMonth()];
    var curYear = date.getFullYear();
    document.getElementById('currentdate').innerHTML=curDay+" "+curMonth+" "+curYear;


    var t =setTimeout(time, 500);
}
function updatetime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }