import Starship from './starship.js';



class Game {
    constructor(){
        this.canvas = document.getElementById("stars"); ;
        this.context = this.canvas.getContext("2d");
        this.starship = new Starship(40,(this.canvas.height) /2);
        this.soucoupes = new Array();
        this.score = 0 ;
        this.animation = null;
     }




     moveAndDraw(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.starship.move(this.canvas);
        this.starship.draw(this.context);
        this.animation= window.requestAnimationFrame(this.moveAndDraw.bind(this));
        /*
        this.soucoupes.forEach( obj => {
            obj.move(this.canvas);
            obj.draw(this.context);
        })
*/
     }

     monteScore(){
        this.score+=200;
    }

    baisseScore(){
        this.score-=1000;
    }


    keyDownActionHandler(event) {
        switch (event.key) {
            case "ArrowUp":
            case "Up":
                this.starship.moveUp();
                break;
            
            case "ArrowDown":
            case "Down":
                this.starship.moveDown();
                break;
            default: return;
        }
        event.preventDefault();
     }

    keyUpActionHandler(event) {
        switch (event.key) {
            
            case "ArrowUp":
            case "Up":
            
            case "ArrowDown":
            case "Down":
                this.starship.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }





}


// crée et exporte l'instance unique de Game
const theGame = new Game();
export default theGame;
