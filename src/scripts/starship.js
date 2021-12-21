 import starshipImgsrc from '../assets/images/vaisseau-ballon-petit.png' ;
 import MoveState from './movestate.js';
 import Mobile from "./mobile.js";

 export default class Starship extends Mobile {


    

    constructor (x,y){
        super(x,y,0,8,starshipImgsrc);
        this._moving = MoveState.NONE;

    }

    get up(){
        return this._moving === MoveState.UP;
    }

    get down(){
        return this._moving === MoveState.DOWN;
    }


    moveUp() {
        this.shiftY =  -10;
        this._moving = MoveState.UP;
    }

    moveDown(){
        this.shiftY = +10;
        this._moving = MoveState.DOWN;
    }


// surcharge de move
    move(canvas) {
    
        if(this._moving === MoveState.UP){
        this.y = Math.max(0, this.y + this.shiftY);
        }
        if(this._moving === MoveState.DOWN){
        this.y = Math.min(canvas.height - this.mobile.height, this.y + this.shiftY);
        }
  }

    stopMoving(){
        this._moving=MoveState.NONE ;
    }

}