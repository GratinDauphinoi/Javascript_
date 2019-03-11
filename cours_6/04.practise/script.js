'use strict'

// var hiddenBox = $( "#banner-message" );
// $( "navbarDropdownMenuLink" ).on( "click", function( event ) {
//   hiddenBox.show();
// });
let counter;

$('#navbarDropdownMenuLink').click(() => {
    console.log('clicked!');
    $('#navbarDropdownMenu').fadeToggle('click');
    console.log('Apparition menu')

});

var today = new Date();
var year = today.getFullYear();
$('#js-current-year').html(year);



const inputWeight = $('.btn btn-primary mb-3 align-self-end').val();
const inputHeight = $('.btn btn-primary mb-3 align-self-end').val();

$('#js-bmi-weight')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const inputWeight = $('.btn btn-primary mb-3 align-self-end').val();
    console.log('weight', inputWeight);
});

$('#js-bmi-height')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const inputHeight = $('.btn btn-primary mb-3 align-self-end').val();
    console.log('height', inputHeight);
});

// $('js-bmi-form').submit()

const bmiFacts = [
    {
      title: 'Future weight of children can be anticipated by BMI',
      description: 'Scientists in a new study have concluded that future weight can be forecasted by looking at children’s BMI. ',
      img: 'http://lorempixel.com/200/200/cats'
    },
    {
      title: 'Losing BMI weight lowers the risk of diabetes',
      description: 'New research established the fact that lowering BMI by almost five units dramatically lowers risk of diabetes, in spite of the initial weight of a person.',
      img: 'http://lorempixel.com/200/200/sports'
    },
    {
      title: 'Pre-pregnancy BMI is closely related to excess weight gain during pregnancy',
      description: 'Excessive weight gain during pregnancy affects the health of a mother and her baby, pre-pregnancy BMI and ethnicity might signal a likelihood for obesity later in life for young mothers.',
      img: 'http://lorempixel.com/200/200/fashion'
    },
    {
      title: 'Coronary heart disease is proportionate to Body Mass Index (BMI)',
      description: 'According to a research from the Million Women Study, Coronary heart disease (CHD) increases with age and also with an increase in body mass index (BMI).',
      img: 'http://lorempixel.com/200/200/food'
    },
  ];


bmiFacts.forEach((el, index) => {
    var newDiv = document.createElement("div");
    newDiv.className = 'col col-12 col-sm-6 col-lg-3 mb-3';
    newDiv.innerHTML = `
        <div class="card h-100">
            <img src="${el.img}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${el.title}</h5>
             <p class="card-text">${el.description}</p>
        </div>
     </div>`;
    $('#js-facts').append(newDiv)
});