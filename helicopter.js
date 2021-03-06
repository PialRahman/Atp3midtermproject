class Helicopter{
    constructor(){    //helicopter design fulll
        this.x1=80;
        this.y1=40;
        this.x2=50;
        this.y2=40;
        this.x3=50;
        this.y3=70;
        this.x4=110;
        this.y4=70;
        this.x5=80;
        this.y5=40;
        this.x6=90;
        this.y6=60;
        this.x7=60;
        this.y7=60;
        this.x8=60;
        this.y8=40;
        this.r=30;
        this.x9=50;
        this.y9=40;
        this.x10=0;
        this.y10=40;
        this.x11=0;
        this.y11=50;
        this.x12=50;
        this.y12=50;
        this.r4=30;
        this.x13=110;
        this.y13=70;
        this.x14=105;
        this.y14=80;
        this.x15=50;
        this.y15=80;
        this.x16=50;
        this.y16=70;
        this.r6=30;
        this.x17=0;
        this.y17=40;
        this.x18=0;
        this.y18=30;
        this.x19=10;
        this.y19=30;
        this.x20=10;
        this.y20=40;
        this.x21=70;
        this.y21=41;
        this.x22=70;
        this.y22=30;
        this.x23=71;
        this.y23=20;
        this.x24=70;
        this.y24=20;
        this.gravity=0.05;
        this.velocity=0;

    }
    show(){
        fill(255,0,0);
        stroke(0,0,0);
        quad(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3,this.x4,this.y4);
        fill(77,195,255);
        quad(this.x5,this.y5,this.x6,this.y6,this.x7,this.y7,this.x8,this.y8);
        fill(255,0,0);
        quad(this.x9,this.y9,this.x10,this.y10,this.x11,this.y11,this.x12,this.y12);
        quad(this.x13,this.y13,this.x14,this.y14,this.x15,this.y15,this.x16,this.y16);
      
        quad(this.x17,this.y17,this.x18,this.y18,this.x19,this.y19,this.x20,this.y20);
         line(this.x21,this.y21,this.x22,this.y22);
        fill(102,230,255);
        ellipse(this.x23,this.y23,this.x24,this.y24);
        fill(255,255,255);
        stroke(255,255,255);
        ellipse(520,40,70,40); //cloud design full
        ellipse(540,40,50,50);
        ellipse(570,40,50,50);
        ellipse(590,40,70,40);
        ellipse(220,60,70,40);
        ellipse(240,60,50,50);
        ellipse(270,60,50,50);
        ellipse(290,60,70,40);
        ellipse(520,40,70,40);
        ellipse(540,40,50,50);
        ellipse(570,40,50,50);
        ellipse(590,40,70,40);
        ellipse(720,90,70,40);
        ellipse(740,90,50,50);
        ellipse(770,90,50,50);
        ellipse(790,90,70,40);
        ellipse(920,40,70,40);
        ellipse(940,40,50,50);
        ellipse(970,40,50,50);
        ellipse(990,40,70,40);
        
    }
    update(){
        this.velocity+=this.gravity;
       this.y1+=this.velocity;
        this.y2+=this.velocity;
        this.y3+=this.velocity;
        this.y4+=this.velocity;
        this.y5+=this.velocity;
        this.y6+=this.velocity;
        this.y7+=this.velocity;
        this.y8+=this.velocity;
        this.y9+=this.velocity;
        this.y10+=this.velocity;
        this.y11+=this.velocity;
        this.y12+=this.velocity;
        this.y13+=this.velocity;
        this.y14+=this.velocity;
        this.y15+=this.velocity;
        this.y16+=this.velocity;
        this.y17+=this.velocity;
        this.y18+=this.velocity;
        this.y19+=this.velocity;
        this.y20+=this.velocity;
        this.y21+=this.velocity;
        this.y22+=this.velocity;
        this.y23+=this.velocity;
       // this.y24+=this.velocity;
       if(this.y13>586 && this.y14>586 && this.y15>586 && this.y16>586){
      this.gravity=0;
      this.velocity=0;
       
       }
       if(this.y17<40 && this.y18<40 && this.y19<40 && this.y20<40){
        this.gravity=0.05;
        this.velocity=0;

       }
       
        
    } 
    up(){
        this.velocity-=3;
    }
}