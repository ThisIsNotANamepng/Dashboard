
function startTime(){

//function getDate(){

  function httpGet(theUrl) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", theUrl, false); 
    xmlHttpReq.send(null);
    return xmlHttpReq.responseText;
  }
  get = (httpGet('OPENWEATHER_API_URL_HERE'));
  console.log(get)
  const json = JSON.parse(get);
  temp = (json.main.temp);
  temp = temp+"°"

  var elem = document.getElementById("body");
  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  document.getElementById('weather').innerHTML=temp;

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


  const d = new Date();
  let day = weekday[d.getDay()];
  let name = month[d.getMonth()];
  let num = d.getDate();


  date = 1
  day = "    "+day+", "+name+" "+num
  document.getElementById("day").innerHTML = day;

  function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("colorbottel")) {
      image.src = "/icons/sunny.svg";
    }
    else {
      image.src = "/icons/sunny.svg";
    }
  }

  var time = document.querySelector('.time');
  
  function updateClock() {
    // Get the current time, day , month and year
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
  
  
      // format date and time
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
  
      // display date and time
      var period = hours < 12 ? 'AM' : 'PM';
      time.innerHTML = hours + ':' + minutes + ':' + seconds;
  }
  
  updateClock();
  setInterval(updateClock, 1000);
}

function changeScene(){
  console.log("change")
}
