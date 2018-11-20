/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Board{
    
    constructor(cardQuantity,btns,imgs){
        this.arrOfCards = [];
        
        for(var i=0; i<cardQuantity; i++)
        {
          var card = new Card(btns[i], imgs[i]);
          this.activateOnClick(card);
          this.arrOfCards.push(card);
        }
    }
    
    activateOnClick(card){
        var _this = this;
        card.button.onclick = function(){
        card.showImage();
        card.updateGlobalCards();
        _this.checkForMatch();
        _this.checkForWinner(); 
    };
 } 
    checkForMatch(){
        if(card1 !== null && card2 !== null)
        {
            turnCount++;
            document.getElementById("turn").innerHTML = turnCount;
            if(card1.image.src === card2.image.src)
            {
                this.clearFlippingTimer();
                setTimeout(this.disableGlobalButtons(),2000);
                deleteButtonFromArray(card1.button);
                deleteButtonFromArray(card2.button);
                this.resetGlobalCards();
               
            }
        }
    }
    
    checkForWinner(){    
        if(arrOfBtns.length === 0)
        {
            document.getElementById("gamename").innerHTML = "<p>CONGRATULATIONS! Your memory is perfect!</p>";
            document.getElementById("timer").innerHTML = "<a href='#' onclick='window.location.reload(true)'>Start again</a>";
            b_Win = true;
        } 
    }
        
    clearFlippingTimer(){
        clearTimeout(timer1);
        clearTimeout(timer2);
    }
    
    resetGlobalCards(){
        card1=null;
        card2=null;
    }
    
    disableGlobalButtons(){
       card1.button.disabled = true;
       card2.button.disabled = true;
    }
    disableButtons(){
        for(var i=0; i < arrOfButtons.length; i++)
        {
            arrOfButtons[i].disabled = true; 
        }
    }
    activateButtons(){
        for(var i=0; i<arrOfButtons.length; i++)
        {
            arrOfButtons[i].disabled = false;
        }   
    }

}

