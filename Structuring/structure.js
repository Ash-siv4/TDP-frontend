'use strict';

(function(){
    /*
    *
    * Variables 
    *
    */

    let element = document.querySelector('#app');

    /*
    *
    * Methods 
    *
    */
    let handleClicks = function(event){
        console.log(event.target);
    }

    /*
    *
    * Inits & Event Listeners 
    *
    */

    element.addEventListener('click',handleClicks);
})();