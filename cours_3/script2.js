'use strict';


// const dragZone = document.querySelector('#js-drop-to');
// const draggable = document.querySelector('#js-draggable');

// draggable.addEventListener('dragstart', event => {
//     event.dataTransfer.setData('text', event.target.id);

// });

// dropZone.addEventListener('dragover', event => {
//     event.preventDefault();
// });

// dropZone.addEventListener('drop', event => {
//     event.preventDefault();
//     const data = event.dataTransfer.getData('text');
//     const el = document.getElementById(data);
//     dropZone.appendChlid(el);
// })

const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg'];
const MAX_IMG_SIZE = 300 * 1024; // 30 Kb
const dropZone = document.querySelector('#js-drop-to');
const filesList = document.querySelector('#js-file-list');

dropZone.addEventListener('DragOver', (e) => onDragOver(e));
dropZone.addEventListener('Drop', (e) => onDrop(e));
dropZone.addEventListener('changeDropZoneState', () => changeDropZoneState(true));
dropZone.addEventListener('changeDropZoneState', () => changeDropZoneState(false));

//Déclenché lorsqu'un élément ou une sélection de texte est déplacé sur une cible de dépôt valide 
function onDragOver(event) {
  event.stopPropagation();
  event.preventDefault();
}

//Déclenché lorsqu'un élément ou une sélection de texte est déposé sur une cible de dépôt valide.
function onDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  filesList.innerHTML = '';
  const filesUploaded = Array.from(e.dataTransfer.files);
  filesUploaded.forEach((file, index) => handleUploadedFile(file, index));
  changeDropZoneState(false);
}

//changer l'etat de la zone de dépot
function changeDropZoneState(isDragging) {
  isDragging ? 
    dropZone.classList.add('js-is-dragged-over') :
    dropZone.classList.remove('js-is-dragged-over');
}

// gerer le fichier téléchargé
function handleUploadedFile(file, index) {
  const error = getUploadError(file);
  error ?
    console.warn(`"${file.name}" Upload Error: ${error}`) :
    filesList.appendChild(createListEl(file, index));
}

//création d'une liste pour stocker les images upload
function createListEl(file, index) {
  const el = document.createElement('li');
  el.setAttribute('id', 'file-list-item-'+index);
  el.className = 'list-group-item file-list-item';

  // add image
  const elPreview = document.createElement('img');
  elPreview.classList.add('file-list-item-preview');
  el.appendChild(elPreview);
  renderImage(file, 'file-list-item-'+index);

  // add name
  const elName = document.createElement('p');
  elName.classList.add('file-list-item-name');
  elName.innerText = file.name;
  el.appendChild(elName);

  return el;
}

//
function renderImage(file, elId) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = document.querySelector(`#${elId} img`);
    img.setAttribute('src', e.target.result);
  }
  reader.readAsDataURL(file);
}

//message erreur si image pas au format correct
function getUploadError(file) {
  if (file.size > MAX_IMG_SIZE) {
    return 'Your image is too big';
  } else if (!ACCEPTED_FORMATS.includes(file.type)) {
    return 'Image of this format is not accepted';
  } else {
    return;
  }
}