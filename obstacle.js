class Obstacle{
    constructor(){
        this.y1=random(270); 
        this.y2=random(270);
        this.w=100;
        this.x=width-this.w;
        this.c=false;
        //this.s=false;
    }
    show(helicopter){
        if(this.c==true){
            //fill(255,0,0)
            console.log('helicopter test: '+helicopter.y);
            if(helicopter.y4<290){
                fill(255,0,0);
                rect(this.x,0,this.w,this.y1);
                fill(0,51,17);
                rect(this.x,height-this.y2,this.w,this.y2);
            }
            else{
                fill(255,0,0);
                rect(this.x,height-this.y2,this.w,this.y2);
                fill(0,51,17);
                rect(this.x,0,this.w,this.y1);
            }
        }
        else{
            //fill(0);
            fill(0,51,17);
            rect(this.x,0,this.w,this.y1);
            rect(this.x,height-this.y2,this.w,this.y2);
        }

        
        //rect(this.x,0,this.w,this.y1);
        //rect(this.x,height-this.y2,this.w,this.y2);
    }
    update(){
        this.x-=5;   
    }
    Collides(helicopter){ //colition detection and reaction   
        if(helicopter.y4< this.y1 || helicopter.y4>height-this.y2 || helicopter.y14< this.y1 || helicopter.y14>height-this.y2 ||helicopter.y15< this.y1 || helicopter.y15>height-this.y2 || helicopter.y23< this.y1 || helicopter.y23>height-this.y2){
            if(helicopter.x4>this.x && helicopter.x4<this.x+this.w || helicopter.x14>this.x && helicopter.x14<this.x+this.w || helicopter.x15>this.x && helicopter.x15<this.x+this.w || helicopter.x23>this.x && helicopter.x23<this.x+this.w){
                this.c=true;
                return true;
            }
        }
    }
    scoreCount(){
        if(this.x + 100 == 0){
            //this.s = true;
            return true;
        }
    }
}