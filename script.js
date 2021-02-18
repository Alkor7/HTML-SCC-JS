
window.addEventListener('keydown', function(pianote) 
{
	document.getElementById("PiKey1do").style.backgroundColor = "white";
	document.getElementById("PiKey2re").style.backgroundColor = "black";
	document.getElementById("PiKey3mi").style.backgroundColor = "white";
	document.getElementById("PiKey4fa").style.backgroundColor = "black";
	document.getElementById("PiKey5sol").style.backgroundColor = "white";
	document.getElementById("PiKey6lja").style.backgroundColor = "black";
	document.getElementById("PiKey7si").style.backgroundColor = "white";

	if (pianote.keyCode == 90) {window.nota1do.play(); document.getElementById("PiKey1do").style.backgroundColor = "#DCDCDC"; }
	if (pianote.keyCode == 88) {window.nota2re.play(); document.getElementById("PiKey2re").style.backgroundColor = "#333333"; }
	if (pianote.keyCode == 67) {window.nota3mi.play(); document.getElementById("PiKey3mi").style.backgroundColor = "#DCDCDC"; }
	if (pianote.keyCode == 86) {window.nota4fa.play(); document.getElementById("PiKey4fa").style.backgroundColor = "#333333"; }
	if (pianote.keyCode == 66) {window.nota5sol.play(); document.getElementById("PiKey5sol").style.backgroundColor = "#DCDCDC"; }
	if (pianote.keyCode == 78) {window.nota6lja.play(); document.getElementById("PiKey6lja").style.backgroundColor = "#333333"; }
	if (pianote.keyCode == 77) {window.nota7si.play(); document.getElementById("PiKey7si").style.backgroundColor = "#DCDCDC"; }
})