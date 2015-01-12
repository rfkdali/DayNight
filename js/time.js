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