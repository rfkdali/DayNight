function horloge() {
	var date = new Date();
	h = date.getHours();
	m = date.getMinutes();
	s = date.getSeconds();

	if (s<10){
			s = "" + 0 + s;
		}
	if (m<10){
			m = "" + 0 + m;
		}
	document.getElementById("time").innerHTML = 'Il est ' + h + ":" + m + ":" + s;
	setTimeout(horloge, 1000);
}
//execution
horloge();

//changement css en fonction de jour/nuit
function styleSwitch () {
	if(h>6 && h<19){
		dayStyle = "css/morning.css";
	}else{
		dayStyle = "css/night.css";
	}
	document.getElementsByTagName('head')[0].innerHTML = '<link rel="stylesheet" type="text/css" href="css/styles.css">' + '<link rel="stylesheet" type="text/css" href="'+dayStyle+'">';
}
styleSwitch();