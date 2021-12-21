// importation de l'instance de Game créée dans Game.js
import theGame from './game.js';


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {
  
    theGame.moveAndDraw();
    window.addEventListener('keydown', theGame.keyDownActionHandler.bind(theGame));
    window.addEventListener('keyup', theGame.keyUpActionHandler.bind(theGame));
}

window.addEventListener("load",init);

//
console.log('le bundle a été généré');
