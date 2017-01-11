var seuil=prompt("Combien de case voulez vous afficher ?");

if (seuil>1000){

var numCase;

for (numCase= 1; numCase <= seuil; numCase++){

document.getElementById('liste').innerHTML += "<li>"+numCase+"</li>";

}}else{
	alert('nombre trop élevé');
}

