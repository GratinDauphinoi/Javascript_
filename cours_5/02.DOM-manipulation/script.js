'use strict'
//Utilisez les méthodes text, html, val, attr pour travailler avec le HTML suivant.


// Récupérez et logguez dans la console le contenu du titre de la page.
const h1text = $('h1').text();
console.log('h1text', h1text);

// Changez le contenu du titre de la page à 'My page title'.
$('h1').text('My page title');

// Récupérez et logguez dans la console le HTML de l'article.
const articleHTML = $('#js-article').html();

// Changez le contenu de l'article à
$('#js-article').html(`
<h2>This is my article.</h2>
<p>This is my article's content.</p>`)

// <h2>This is my article.</h2>
// <p>This is my article's content.</p>
// <a href="https://example.com">Read more</a>
// Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.
const inputValue = $('#js-search').val();

// Changez la valeur du champ de saisie à 'Beagles'
$('#js-search').val('Beagle');

$('#js-search-form')[0].addEventListener('submite', (event) => {
    event.preventDefault();
})

// Récupérez et logguez dans la console la valeur du placeholder du champ de saisie.
$('#js-search-form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = $('#js-search').val();

    if (inputValue == 'chat') {
        $('#js-search-result').html(`<p>Miaou!</p>`);
    } else {
        $('#js-search-result').html(`<p>Pas de resultats pour la recherche : <strong>'` + inputValue + `'</strong></p>`);
    }

});

// Changez la valeur du placeholder du champ de saisie à 'Search'

//   <div class="container">
//     <form class="form-row" id="js-search-form">

//       <div class="col-auto">
//         <div class="input-group">
//           <div class="input-group-prepend">
//             <div class="input-group-text">Search</div>
//           </div>
//           <input type="text" class="form-control" id="js-search" placeholder="Recherche">
//         </div>
//       </div>

//       <div class="col-auto">
//         <button class="btn btn-primary" type="submit">Rechercher</button>
//       </div>
//     </form>

//     <div id="js-search-result"></div>
//   </div>
// Sélectionnez le formulaire dans le DOM. Ajoutez un écouteur d'événements 'submit' au formulaire pour déclencher un événement à chaque fois que le formulaire est soumis. Quand ce formulaire est soumis, récupérez la valeur saisie dans le champ de recherche. Si la valeur saisie est égale à 'Chat', insérez le texte 'Miaou!' dans le <div> avec l'id js-search-result. Sinon dans ce même <div> insérez du HTML <p>Pas de resultats pour la recherche : <strong>' + keyword + '</strong></p>.

// [append] Une image avec src égal à https://img.buzzfeed.com/buzzfeed-static/static/2014-12/23/9/enhanced/webdr12/anigif_enhanced-23685-1419343761-9.gif?downsize=800:*&output-format=auto&output-quality=auto
// [prepend] Un paragraphe avec le texte Votre chat a de l'humour. Par exemple, il adore se mettre à chasser une souris invisible, faire des dérapages contrôlés ou gratter sous votre lit à 5h11 du matin. en tant que premier enfant du div.
// [append] Un paragraphe avec le texte Et ne vous avisez pas de trop remuer les pieds : vous pourriez le regretter. en tant que dernier enfant du div.
// [before] Un paragraphe avec le texte C'est la raison pour laquelle il peut aussi remplir la fonction « réveil », ce qui est bien pratique. Enfin, sauf les week-ends. juste avant l'image.
// [after] Un paragraphe avec le texte S'il dort dans votre lit, il y a de grandes chances pour qu'il s'installe pile au centre et que vous vous retrouviez au bord, prêt(e) à tomber. juste après l'image.
// Le texte final sera : Votre chat a de l'humour. Par exemple, il adore se mettre à chasser une souris invisible, faire des dérapages contrôlés ou gratter sous votre lit à 5h11 du matin. C'est la raison pour laquelle il peut aussi remplir la fonction « réveil », ce qui est bien pratique. Enfin, sauf les week-ends. (image) S'il dort dans votre lit, il y a de grandes chances pour qu'il s'installe pile au centre et que vous vous retrouviez au bord, prêt(e) à tomber. Et ne vous avisez pas de trop remuer les pieds : vous pourriez le regretter.'

// Manipuler le CSS
// Utilisez les méthodes addClass, removeClass, toggleClass, hasClass, css pour travailler avec le HTML suivant.

// <div id="js-alert" class="alert">
//   <p>Very important message</p>
// </div>
// <button id="js-btn" class="btn btn-secondary">Change alert state</button>
// Ajoutez la classe 'alert-primary' au <div>.
$('#js-alert').addClass('alert-primary');

// Supprimez la classe 'alert' du <div>. Supprimez la classe 'alert-primary' du <div>.
$('#js-alert').removeClass('alert-primary');

// Ajoutez d'un coup les classes 'alert' et 'alert-warning' au <div>.
$('#js-alert').addClass('alert alert-warning');

// Vérifiez si le <div> possède déjà la classe 'alert-warning'. Si oui, supprimez-la.
if ($('#js-alert').hasClass('alert-warning')) {
    $('#js-alert').removeClass('alert-warning');
}

// En cliquant sur le bouton #js-btn, basculez la classe 'alert-success': premier clique ajoute la classe, deuxième clique l'enlève, troisième l'ajoute de nouveau, etc.
$('#js-btn')[0].addEventListener('click', () => {
    $('#js-alert').toggleClass('alert-success');
});


// Récupérez et logguez dans la console la couleur du fond du bouton.
console.log($('#js-btn').css('backgroung-color'));

// Passez la couleur du fond du bouton en #71b8af.
$('#js-btn').css('background-color', '#71b8af');

// Changez d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px.
$('#js-btn').css({
    color: '#fff2d5',
    'border-radius': '3px';

});

// .text-danger {
//   color: red;
// }
// <div class="alert alert-danger" id="js-danger-alert">
//   <p>My alert</p>
//   <button class="btn btn-success" id="js-danger-alert-btn">Ok</button>
// </div>
// Vérifiez si le <div> a la classe alert-danger. Si oui, ajoutez la classe text-danger au <p> et supprimez la classe btn-success du bouton. Au clique sur le bouton ajoutez la propriété css display égale à none au <div>.