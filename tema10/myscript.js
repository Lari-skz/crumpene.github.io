var group=""
var solo=""
function traducereeng(){
	document.getElementById("trupe").innerHTML="K-pop groups";
    document.getElementById("solo").innerHTML="Solo artists";}
function traduceretrupe(){
	document.getElementById("numetrupa").innerHTML="Group Name";
	document.getElementById("andebut").innerHTML="Debut year";
	document.getElementById("primamelodie").innerHTML="First song";
	document.getElementById("numar").innerHTML="Members number";
	document.getElementById("numefandom").innerHTML="Fandoms name";
    document.getElementById("compania").innerHTML="Company";
    document.getElementById("mygroup").innerHTML=" Your favorite group is";}
function traduceresolo(){
	document.getElementById("nume").innerHTML="Name";
	document.getElementById("varsta").innerHTML="Age";
    document.getElementById("companie").innerHTML="Company";
	document.getElementById("mysolo").innerHTML="Your favorite artist is";}
function favgroup(){
	group=prompt("Introdu numele trupei tale favorite:")
    document.getElementById("mygroup").innerHTML ="Trupa " + "ta " + "favorita " + "este " + group + "."}
function favsolo(){
	solo=prompt ("Introdu numele artistului tau favorit:")
    document.getElementById("mysolo").innerHTML="Artistul " + "tau " + "favorit " + "este " + solo + "."}
