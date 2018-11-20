/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var CardQuantity = 36;
var turnCount = 0;

// global cards are responsible for the recently opened cards
var card1 = null;
var card2 = null; 
// timers for both global cards accordingly
var timer1, timer2; 

//ImgHandler class is responsible for distributing images
var img = new ImgHandler(CardQuantity);

// populate array of button tags && array of images
var arrOfButtons = document.getElementsByTagName("BUTTON"); //HTML collection
var arrOfBtns = convertToArray(arrOfButtons);              // "true" array
var arrOfImages = img.populateArrayOfImages();                 

// create the Board with card-objects & timer
var board = new Board(CardQuantity,arrOfBtns,arrOfImages);
var timer = new Timer();
var time = timer.countdown(2.2);

// show all the images at the beggining & hide them in 5 secs
for (var i=0; i<board.arrOfCards.length; i++)
{
    let card = board.arrOfCards[i];
    card.showImage();
}
setTimeout(function hide(){
    for (var i=0; i<board.arrOfCards.length; i++)
    {
        let card = board.arrOfCards[i];
        card.hideImage();
    }
},10000);

//disable buttons when the timer is over
var b_TimeIsOver = false;
var b_Win = false;

setInterval(function(){
    if(b_TimeIsOver === true)
    {
        board.disableButtons();
    }
},1000);
//disable timer if there is a win
setInterval(function(){
    if(b_Win === true)
    {
        clearInterval(time);
    }
},1000);

function deleteButtonFromArray(btn){
    for( var i=0; i < arrOfBtns.length; i++)
    { 
        if (arrOfBtns[i] === btn)
        {
            arrOfBtns.splice(i,1);
        }
    }
}

function convertToArray(collection){
    //converting HTML collection to an array(to manimulate elements easily)
    var arrBtn = [];

    for(var i=0; i<collection.length; i++)
    {
        arrBtn.push(collection[i]);
    }
    return arrBtn;
}


