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
	document.getElementsByTagName('head')[0].innerHTML = '<link rel="stylesheet" type="text/css" href="css/styles.css">'+ '<link rel="stylesheet" type="text/css" href="css/jauge.css">' + '<link rel="stylesheet" type="text/css" href="'+dayStyle+'">';
}

styleSwitch();


var i = 0;
var j = 0;
var timer;

function pgBar () {

	var w = window.innerWidth;
	console.log('window width = ' + w);

	function pgBarWidth () {
		document.getElementById('jauge1').style.width = ((w * s)/60) + 'px';
		document.getElementById('jauge2').style.width = ((w * m)/60) + 'px';
		document.getElementById('jauge3').style.width = ((w * h)/24) + 'px';
	}
	pgBarWidth();

	//let's go
	
	document.getElementById('position1').style.left = ((w * s)/60) + 'px';
	document.getElementById('position1').innerHTML = s;
	console.log('seconds : ' + s);

	
	document.getElementById('position2').style.left = ((w * m)/60) + 'px';
	document.getElementById('position2').innerHTML = m;
	console.log('minutes : ' + m);

	
	document.getElementById('position3').style.left = ((w * h)/24) + 'px';
	document.getElementById('position3').innerHTML = h;
	console.log('hours : ' + h);
	

	timer = setTimeout(pgBar, 1000);

	if(j==24){
		stopTimer()
	}
}

function stopTimer () {
	clearTimeout(timer)	
}

pgBar();
