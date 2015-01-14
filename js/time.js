
function horloge() {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();

	var w = window.innerWidth;

	if (s<10){
			s = "" + 0 + s;
		}
	if (m<10){
			m = "" + 0 + m;
		}
	document.getElementById("time").innerHTML = 'Il est ' + h + ":" + m + ":" + s;

	toggleColor(s);
	
	pgBarWidth(w,s,m,h);
	pgBarPosition(w,s,m,h);
	pgBarData(w,s,m,h);

	if(h > 6 && h < 19){
		styleSwitch("css/morning.css");
	} else {
		styleSwitch("css/night.css");
	}

	setTimeout(horloge, 1000);

}
//execution
horloge();


function styleSwitch (dayStyle) {
	var styleSheetList = document.styleSheets;

    var add_style = true
	for(var i = 0; i < styleSheetList.length; i++) {
		if (styleSheetList[i].href.indexOf(dayStyle) > 0) {
			add_style = false
		}
	}
	
	if (add_style) {
		var link = document.createElement('link')
		link.setAttribute('rel', 'stylesheet')
		link.setAttribute('type', 'text/css')
		link.setAttribute('href', dayStyle)
		document.getElementsByTagName('head')[0].appendChild(link)
	}
}


function pgBarWidth (w,s,m,h) {
		document.getElementById('jauge1').style.width = ((w * s)/60) + 'px';
		document.getElementById('jauge2').style.width = ((w * m)/60) + 'px';
		document.getElementById('jauge3').style.width = ((w * h)/24) + 'px';
	}
function pgBarPosition (w,s,m,h) {
	document.getElementById('position1').style.left = ((w * s)/60) + 'px';
	document.getElementById('position2').style.left = ((w * m)/60) + 'px';
	document.getElementById('position3').style.left = ((w * h)/24) + 'px';
}
function pgBarData (w,s,m,h) {
	document.getElementById('position1').innerHTML = s;
	document.getElementById('position2').innerHTML = m;
	document.getElementById('position3').innerHTML = h;
}

function toggleColor (s) {
	var secondes = parseInt(s);

	if((secondes % 2) == 0){
		document.getElementById("time").className = "pair";
	}
	else{
		document.getElementById("time").className = "impair";
	}
}
