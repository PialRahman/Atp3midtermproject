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
        this.y17=40;
        this.x17=0;
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
        this.y25=40;   //Cloud Co-orditates
        this.x25=520;  
        this.y26=40;
        this.x26=540;
        this.y27=40;
        this.x27=570;
        this.y28=40;
        this.x28=590;
        this.y29=60;
        this.x29=220;
        this.y30=60;
        this.x30=240;
        this.y31=60;
        this.x31=270;
        this.y32=60;
        this.x32=290;
        /*this.y33=40;
        this.x33=520;
        this.y34=40;
        this.x34=540;
        this.y35=60;
        this.x35=570;
        this.y36=40;
        this.x36=590;*/
        this.y33=90;
        this.x33=720;
        this.y34=90;
        this.x34=740;
        this.y35=90;
        this.x35=770;
        this.y36=90;
        this.x36=790;
        this.y37=40;
        this.x37=920;
        this.y38=40;
        this.x38=940;
        this.y39=40;
        this.x39=970;
        this.y40=40;
        this.x40=990;
        this.c_velocity = 1;

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

        fill(255,165,0);        //Sun Design
        stroke(255,69,0);
        ellipse(835,60,80);

        fill(255,255,255);     //cloud design full
        stroke(255,255,255);
        ellipse(this.x25,this.y25,70,40); 
        ellipse(this.x26,this.y26,50,50);
        ellipse(this.x27,this.y27,50,50);
        ellipse(this.x28,this.y28,70,40);
        ellipse(this.x29,this.y29,70,40);
        ellipse(this.x30,this.y30,50,50);
        ellipse(this.x31,this.y31,50,50);
        ellipse(this.x32,this.y32,70,40);
        ellipse(this.x33,this.y33,70,40);
        ellipse(this.x34,this.y34,50,50);
        ellipse(this.x35,this.y35,50,50);
        ellipse(this.x36,this.y36,70,40);
        ellipse(this.x37,this.y37,70,40);
        ellipse(this.x38,this.y38,50,50);
        ellipse(this.x39,this.y39,50,50);
        ellipse(this.x40,this.y40,70,40);
        ellipse(this.x41,this.y41,70,40);
        ellipse(this.x42,this.y42,50,50);
        ellipse(this.x43,this.y43,50,50);
        ellipse(this.x44,this.y44,70,40);
        
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
        this.x25+=this.c_velocity; // Cloud Movement
        this.x26+=this.c_velocity;
        this.x27+=this.c_velocity;
        this.x28+=this.c_velocity;
        this.x29+=this.c_velocity;
        this.x30+=this.c_velocity;
        this.x31+=this.c_velocity;
        this.x32+=this.c_velocity;
        this.x33+=this.c_velocity;
        this.x34+=this.c_velocity;
        this.x35+=this.c_velocity;
        this.x36+=this.c_velocity;
        this.x37+=this.c_velocity;
        this.x38+=this.c_velocity;
        this.x39+=this.c_velocity;
        this.x40+=this.c_velocity;
        this.x41+=this.c_velocity;
        this.x42+=this.c_velocity;
        this.x43+=this.c_velocity;
        this.x44+=this.c_velocity;

        if (this.x25-70 == 1400) {
            this.x25 = 0;
          }
          if (this.x26-50 == 1400) {
            this.x26 = 0;;
          }
          if (this.x27-50 == 1400) {
            this.x27 = 0;
          }
          if (this.x28-70 == 1400) {
            this.x28 = 0;
          }
          if (this.x29-70 == 1400) {
            this.x29 = 0;
          }
          if (this.x30-50 == 1400) {
            this.x30 = 0;
          } 
          if (this.x31-50 == 1400) {
            this.x31 = 0;
          }
          if (this.x32-70 == 1400) {
            this.x32 = 0;
          }
          if (this.x33-70 == 1400) {
            this.x33 = 0;
          }
          if (this.x34-50 == 1400) {
            this.x34 = 0;
          }
          if (this.x35-50 == 1400) {
            this.x35 = 0;
          }
          if (this.x36-70 == 1400) {
            this.x36 = 0;
          }
          if (this.x37-70 == 1400) {
            this.x37 = 0;
          }
          if (this.x38-50 == 1400) {
            this.x38 = 0;
          }
          if (this.x39-50 == 1400) {
            this.x28 = 0;
          }
          if (this.x40-70 == 1400) {
            this.x40 = 0;
          }
          if (this.x41-70 == 1400) {
            this.x41 = 0;
          }
          if (this.x42-50 == 1400) {
            this.x42 = 0;
          }
          if (this.x43-50 == 1400) {
            this.x43 = 0;
          }
          if (this.x44-70 == 1400) {
            this.x44 = 0;
          }
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