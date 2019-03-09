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

console.log($('#js-btn').css('background-color'));


// Passez la couleur du fond du bouton en #71b8af.

$('#js-btn').css('background-color', '#71b8af')

// Changez d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px.

$('#js-btn').css({
    color: '#fff2d5',
    'border-radius': '3px'
})


