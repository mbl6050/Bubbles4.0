function dByT() {
     navigator.geolocation.getCurrentPosition(getDistanceBySpeed);
     console.log(8);
}
if (navigator.geolocation) {
  console.log('Geolocation is supported!');
  navigator.geolocation.getCurrentPosition(getPos);
  navigator.geolocation.watchPosition(getDistance);
  var dTime = setInterval(dByT,1000);
  
}
else {
  console.log('Geolocation is not supported for this Browser/OS version yet.');
}
var lat1;
var lon1;
var lat2;
var lon2;
var speed;
var distance = 0;
var distance2 = 0;
function getPos(position) {
  lat1 = position.coords.latitude;
  lon1 = position.coords.longitude; 
}
function getDistance(position) {
  lat2 = position.coords.latitude;
  lon2 = position.coords.longitude;
  var d = calculateDistance(lat1, lon1, lat2, lon2);
  distance = d + distance;
  lat1 = lat2;
  lon1 = lon2;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = (lat2 - lat1).toRad();
  var dLon = (lon2 - lon1).toRad(); 
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
          Math.sin(dLon / 2) * Math.sin(dLon / 2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  var d = R * c;
  return d;
}
Number.prototype.toRad = function() {
  return this * Math.PI / 180;
};


function getDistanceBySpeed(position) {
  speed = position.coords.speed;
  distance2 = distance2 + speed;
  console.log(distance2);
  document.getElementById("text").value = distance2;
}
