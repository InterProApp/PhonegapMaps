document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

}

function onSuccess(position) {

  var txtLatitude = document.getElementById('txt-latitude');
  var txtLongitude = document.getElementById('txt-longitude');
  txtLatitude.value = position.coords.latitude;
  txtLongitude.value = position.coords.longitude;

  // var element = document.getElementById('geolocation');
  // element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
  //   'Longitude: ' + position.coords.longitude + '<br />' +
  //   'Altitude: ' + position.coords.altitude + '<br />' +
  //   'Accuracy: ' + position.coords.accuracy + '<br />' +
  //   'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
  //   'Heading: ' + position.coords.heading + '<br />' +
  //   'Speed: ' + position.coords.speed + '<br />' +
  //   'Timestamp: ' + position.timestamp + '<br />';
}

function onError(error) {
  navigator.notification.alert('Não foi possível carregar a localização atual. Verifique se o GPS está ativado e tente novamente!');
  // alert('code: ' + error.code + '\n' +
  // 'message: ' + error.message + '\n');
}

function getAtual() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function verMapa() {
  var txtLatitude = document.getElementById('txt-latitude');
  var txtLongitude = document.getElementById('txt-longitude');

  var myCenter = new google.maps.LatLng(txtLatitude.value, txtLongitude.value);

  var mapProp = {
    center: myCenter,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
  });

  marker.setMap(map);
}
