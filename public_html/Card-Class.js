/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Card{
    constructor(btn,img)
    {
        this.button = btn;
        this.image = img;
    }

    showImage(){
        this.button.innerHTML = "<img src='" + this.image.src + "' style='height:50px;width;50px;'>";
        this.button.disabled = true; 
    }
    
    updateGlobalCards(){
        //assigning last opened cards to the global cards
        if(card1 === null){
           card1=this;
           var _this = this;
           timer1 = setTimeout(function() { _this.hideImage(); },1500);
        }
        else{
            card2=this;
            var _this = this;
            timer2 = setTimeout(function() { _this.hideImage(); },1500);
        }  
    }
    
    hideImage(){
        this.button.innerHTML = this.button.value;
        this.button.disabled = false;
        board.resetGlobalCards();
    }
}
