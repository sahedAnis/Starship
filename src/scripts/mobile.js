import mobileImgsrc from '../assets/images/flyingSaucer-petit.png' ;

export default class Mobile {


    constructor (x,y,deltaX = 0,deltaY = 0,source=mobileImgsrc) {

        this.x = x ;
        this.y = y ;
        this.deltaX = deltaX ;
        this.deltaY = deltaY ;
        this.mobile = this.createMobile(source);



    }


    //dessin du mobile
    draw(context){
        context.drawImage(this.mobile,this.x,this.y);
    }

    //déplacement du mobile
    move(){
        this.x = this.x + this.deltaX ;
        this.y = this.y + this.deltaY
        
    }

    //création du mobile
    createMobile(source){
        const mobileImg = new Image();
        mobileImg.src =  source;
        return mobileImg ;


    }




}