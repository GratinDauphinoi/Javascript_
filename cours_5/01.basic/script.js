'use strict';


// toutes les balises <div>
$('div');
console.log('all divs', $('div'));

// toutes les balises avec le nom de classe js-paragraph
$('.js-paragraph');
console.log('select by class name', $('.js-paragraph'));

// la balise avec l'id js-unique-paragraph


// le premier titre <h3>
$('h3:first');
console.log('le premier titre <h3>', $('h3:first'));

// le premier <th> du premier <tr>
console.log('le premier <th> du premier <tr>', $('tr:first th:first'));

// le premier <td> du chaque <tr>
console.log('le premier <td> de chaque <tr>', $('tr:first td:focus'));

// tous les liens
$('a');
console.log('le premier liens <a>, a:focus');

// tous les lien externes (ceux qui ont l'attribut target égal à _blank)
$('a[target="_blank"]');
console.log('tous les lien externe', $('a[target="_blank"]'));

// tous les lien internes (ceux qui n'ont pas d'attribut target égal à _blank)
$('a[target!="_blank"]');
console.log('tous les lien externe sans attribut _blank', $('a[target!="_blank"]'));

$(document).ready(() => {
// tous les boutons dans un formulaire
$('form :button');
    
});
