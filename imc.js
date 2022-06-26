
const calculer = document.getElementById('calculer');



function imc () {
    const nom = document.getElementById('nom').value;
    const taille = document.getElementById('taille').value;
    const poids = document.getElementById('poids').value;
    const resultat = document.getElementById('resultat');

    if (nom !== '' && taille !== '' && poids !== '') {
        
        const valeurIMC = (poids / (taille * taille)).toFixed(1) // le méthode toFixed arrondit à 1 décimal

        let classification = '';

        if (valeurIMC < 18.5) {
            classification = 'Sous poids!';
        } else if(valeurIMC < 25) {
            classification = 'Avec un poids idéal!';
        } else if (valeurIMC < 30) {
            classification = 'Légèrement en surpoids!';
        } else if (valeurIMC < 35) {
            classification = 'Avec obésité de grade I!';
        } else if (valeurIMC < 40) {
            classification = 'Avec obésité de grade II!';
        } else{
            classification = 'Avec obésité de grade III. Attention';
        }

        resultat.textContent = `${nom} votre IMC c'est ${valeurIMC} et vous êtes ${classification}`;

    } else {
        resultat.textContent = 'S\'il vous plait remplissez tous les champs!!!';
    }
}