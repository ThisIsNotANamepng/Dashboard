<html>
<head>

<link href="style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">

function startTime(){
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  // add a zero in front of numbers<10
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('time').innerHTML=h+":"+m+":"+s;
  t=setTimeout('checkTime()',500);
  
  
  function checkTime(i)
  {
  if (i<10){
  i="0" + i;
  }
  return i;
}



//function getDate(){

  function httpGet(theUrl) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", theUrl, false); 
    xmlHttpReq.send(null);
    return xmlHttpReq.responseText;
  }
  get = (httpGet('https://api.openweathermap.org/data/2.5/weather?lat=43.098640&lon=-88.488660&appid=64d91ce108b52aa8941efd46ddba8ca5&units=imperial'));
  console.log(get)
  const json = JSON.parse(get);
  temp = (json.main.temp);

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

  var img = document.createElement("img");
  img.src = "icons/sunny.svg";
  var src = document.getElementById("image");
  src.appendChild(img);
}
</script>
</head>
<body onload="startTime()">


  <div id="block">
    <div id="time"></div>
    <div id="day"></div>
    <div id="image"></div>

  </div>
  <div id="weat">
    <div id="weather"></div>
  </div>


</body>
</html>
