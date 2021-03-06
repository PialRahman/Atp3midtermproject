let helicopter;
let obs=[];
function setup(){
    createCanvas(1400,600);
    helicopter=new Helicopter();
    obs.push(new Obstacle());

}
function draw(){
background(100,300,400);
helicopter.update();
for(let i=0;i<obs.length;i++){
if(obs[i].Collides(helicopter)){
    alert("Game over!")
    noLoop();
}
obs[i].update();
obs[i].show();
}
helicopter.show();
if(frameCount%100==0){
    obs.push(new Obstacle());
}


}
function keyPressed(){
    if(key == ' ')
    {
        helicopter.up();
    }
}