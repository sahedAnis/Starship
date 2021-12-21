import Mobile from './mobile';
import saucerImgsrc from '../assets/images/flyingSaucer-petit.png' ;

export default class Saucer extends Mobile{
    
    constructor(x,y){
         super(x,y,-3,0,saucerImgsrc);


}
    move(){
        if (this.x-this.deltax>0) {
            this.x=this.x-this.deltax;
        }
        else {
            delete this;
        }
    }



}
