/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class ImgHandler{
    constructor(cardQuantity){
        // declaring the quantity of cards and the photos
        this.cards = cardQuantity;
        this.photos= cardQuantity/2;
    }
     
    populateArrayOfImages(){

        var imgArray = [];

        for (var cardIndex=0, imgIndex=0; cardIndex<this.cards; cardIndex++, imgIndex++)
        {
            if(imgIndex<this.photos)
            {
                imgArray[cardIndex] = new Image();
                imgArray[cardIndex].src = 'icons/' + imgIndex + '.png';
            }
            else
            {
                imgIndex=-1;
                cardIndex=17;
            }
        }
        //shuffle array to locate images differently every game round;
        imgArray = this.shuffleArray(imgArray);
        return imgArray;
    }

    shuffleArray(imgArray){

        // PROBLEM : function creates another element 
        var currentIndex = imgArray.length-1;
        var randomIndex, temporaryValue;

        while(0 !== currentIndex)
        {
            randomIndex =  Math.floor(Math.random() * currentIndex);
            temporaryValue = imgArray[currentIndex];
            imgArray[currentIndex] = imgArray[randomIndex];
            imgArray[randomIndex] = temporaryValue;

            currentIndex--;
        }
        return imgArray;
    } 
}

