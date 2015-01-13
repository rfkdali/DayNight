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

function jauge () {
	console.log(i)
	i++;
	console.log("test : " + (i-1));
	document.getElementById('jauge').style.width = s * 15 + 'px';
	document.getElementById('position').style.left = s * 15 + 'px';
	document.getElementById('position').innerHTML = s;

	document.getElementById('jauge2').style.width = m * 15 + 'px';
	document.getElementById('position2').style.left = m * 15 + 'px';
	document.getElementById('position2').innerHTML = m;
	console.log(m);

	document.getElementById('jauge3').style.width = h * 15 + 'px';
	document.getElementById('position3').style.left = h * 15 + 'px';
	document.getElementById('position3').innerHTML = h;
	console.log(h);
	

	timer = setTimeout(jauge, 1000)

	if(j==24){
		stopTimer()
	}
}

function stopTimer () {
	clearTimeout(timer)	
}

jauge();
