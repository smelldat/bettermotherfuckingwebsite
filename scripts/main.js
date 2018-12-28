let monBouton = document.querySelector('button');
let monTitre = document.querySelector ('h1');

function définirNomUtilisateur() {
	let monNom = prompt('Veuillez saisir votre nom.');
	localStorage.setItem('nom', monNom);
	monTitre.textcontent = 'Mozilla est cool, ' + monNom;
}
if (!localStorage.getItem('nom')) {
	définirNomUtilisateur();
} else {
	let nomEnregistré = localStorage.getItem('nom');
	monTitre.textcontent = 'Mozilla est cool, ' + nomEnregistré;
}

monBouton.addEventListener('click', function() {
	définirNomUtilisateur();
});