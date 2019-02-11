`use strict`;

if (navigator.geolocation){
    const successCallback = (position) => {
             console.log('position', position); 
             const link = document.createElement('a');
             
             link.setAttribute('href', 'https://www.latlong.net/c/?lat=${pisition.coords.latitude}&long=${position.coords.latitude}')

             link.setAttribute('target', '_blank');
             link.innerText = 'Click in the blakc hole daddy';

             document.querySelector('body').appendChild(link);
     }  
     const errorCallBack = (error) => {
         console.log('error', error)
         const GEO_ERRORS = {
         PERMISSION_DENIED: 1,
         POSITION_UNAVAILABLE: 2,
         TIMEOUT: 3
     } 
     if (error.code === GEO_ERRORS.PERMISSION_DENIED) {
         alert('Share your position, steuplé')
     }
   }
     navigator.geolocation.getCurrentPosition(successCallback,errorCallBack)
}