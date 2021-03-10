let helicopter;
let obs=[];
function setup(){
    scoreBoard = createDiv('Score: 0');
    scoreBoard.position(20, 20);
    scoreBoard.id = 'score';
    scoreBoard.style('color', 'blue');
    scoreBoard.style('font-size', '30px');

    createCanvas(1400,600);
    helicopter=new Helicopter();
    obs.push(new Obstacle());

}
function draw(){
background(100,300,400);
helicopter.update();
helicopter.show();

for(let i=0;i<obs.length;i++){
if(obs[i].Collides(helicopter)){
    
    noLoop();
    const finalScore = parseInt(scoreBoard.html().substring(7));
    obs[i].update();
    obs[i].show(helicopter);
    alert("Game over..!\nYour score is: " + finalScore);
}
if(obs[i].scoreCount()){
    const prevScore = parseInt(scoreBoard.html().substring(7));
    scoreBoard.html('Score: ' + (prevScore + 100));

}
obs[i].update();
obs[i].show(helicopter);
}

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