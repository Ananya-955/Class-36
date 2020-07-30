class Game {
    constructor(){
    }
getState(){

    var gameStateRef=database.ref('gameState');

    gameStateRef.on("value",(data)=>{
        gameState=data.val();
    });
}
update(state){

    database.ref('/').update({
        gameState:state
    })
}
async start(){

    if (gameState===0){
        player=new Player();
        player.getCount();
        form=new Form();
        form.display();
    }
}
play(){
    form.hide();
    textSize(20);
    text("Game Start", displayWidth/2-30,100);

    Player.getPlayerInfo();

    if (allPlayers!== undefined){
        var index=0;
        var x=170;
        var y;
        for (plr in allPlayers){
            index=index+1;
            x=x+200;
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            car[index-2].y=y;
            if (index === player.index){
                cars[index-1].shapeColor="red";
            }
        }

    }
}
}