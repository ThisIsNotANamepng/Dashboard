console.log("start")
console.log("dvrwegbre")

function realstarTime(){
  console.log("egergert")
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  // add a zero in front of numbers<10
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('time').innerHTML=h+":"+m+":"+s;
  t=setTimeout('realstartTime()',500);
  
  function checkTime(i){
  if (i<10){
  i="0" + i;
  }
  

  return i;
}

console.log("ewgrgegr")


//function getDate(){

let xmlHttpReq = new XMLHttpRequest();
xmlHttpReq.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=43.098640&lon=-88.488660&appid=0c8f03f0bd15a62956bae4e090c25151&units=imperial", false); 
xmlHttpReq.send(null);
return xmlHttpReq.responseText;

console.log("wefwef")
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
realstarTime()
}

realstarTime()