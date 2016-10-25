$(document).ready(function() {   


// load the facebook javascript sdk
  window.fbAsyncInit = function() {
    FB.init({
      appId      : 'your-app-id',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src="https://connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


// controls the sliding menu and nav stuff.	
var sideslider = $('[data-toggle=collapse-side]');
var sel = sideslider.attr('data-target');
var sel2 = sideslider.attr('data-target-2');
sideslider.click(function(event){
    $(sel).toggleClass('in');
    $(sel2).toggleClass('out');
});
console.log("javascript loaded");



// powers the google maps api include
// if HTML DOM Element that contains the map is found...
if (document.getElementById('map-canvas')){
 
    // Coordinates to center the map
    var myLatlng = new google.maps.LatLng(44.9729381,-93.2480174);
 
    // Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    // Attach a map to the DOM Element, with the defined settings
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


    var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
    });

}







});