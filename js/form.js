class Form{
constructor(){

    this.input=createInput("Name:");
    this.button=createButton("PLAY");
    this.greeting=createElement('h2');

}

hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}
display(){

var title=createeElement('h1');
title.html("Car Racing Game");
title.position();

this.input.position();
this.button.position();

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();

    player.name=this.input.value();
    playerCount=playerCount+1;
    player.index=playerCount;
    player.update();
    player.updateCount(playerCount);

    this.greeting.html("WELCOME TO THIS GAME " + player.name);
    this.greeting.position();

});
}

}