// const myDivs = document.getElementsByTagName('div');
// console.log('myDivs', myDivs);

// const myDivs2 = document.querySelectorAll('div');
// console.log('myDivs2', myDivs2);

// const myParagraphs = document.getElementsByClassName('secondary-paragraph');
// const myParagraphs2 = document.querySelectorAll('secondary-paragraph');

// const myUniqueEl = document.getElementById('js-unique-el');
// const myUniqueEl2 = document.querySelectorAll('#js-unique-el');

// const myParagraphsInDivs = document.querySelectorAll('div p');
// console.log('myparagraphInDivs', myParagraphsInDivs);

// const spansProceededByDivs = document.querySelector('div + span');
// console.log('spansProceedByDivs', spansProceededByDivs);








// const firstP = document.querySelector('.first-p');
// firstP.innerText = 'I am the first paragraph';
// console.log('firstP > text', firstP.innerText);

// const secondP = document.querySelector('.second-p');
// secondP.innerHTML = '<span>Hello</span>';
// console.log('secondP html', secondP.innerHTML);

// const myImg = document.querySelector('img');
// myImg.setAttribute('width', '50%');
// myImg.setAttribute('height', 'auto');

// firstP.getElementsByClassName.color = 'blue';
// firstP.getElementsByClassName.fontSize = '1.5rem';


// myImg.className = 'my-class';
// myImg.classList.add('my-class');
// myImg.classList.remove('some-class');

// const myBody = document.querySelector('body');
// const newEl = document.createElement('p');
// newEl.innerText = 'Hello';
// newEl.style.color = 'red';

// myBody.appendChild(newEl);

// const newEl2 = document.createElement('p');
// newEl2.innerText = 'Hello';
// newEl2.style.color = 'yellow';

// myBody.prepend(newEl2);

// myBody.removeChild(newEl2);


const pcName = document.querySelector('.main-paragraph');
pcName.innerText = navigator.userAgent;
console.log('Nom du pc', pcName.innerText);

const lang = document.querySelector('.secondary-paragraph');
lang.innerText = navigator.language;
console.log('Langue pc', lang.innerText);

const cook = document.querySelector('.3-paragraph');
cook.innerText = navigator.cookieEnabled;