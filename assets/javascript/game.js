$(document).ready(function() {
    //Global variables
    var gemValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var numberOfGems = 4;
    var randomGemsValues = [];
    var sumOfGems = 0;
    var userSum = 0;
    var randomNumber = 0;
    var wins = 0;
    var losses = 0;


    //Function to shuffle possible gem values
    function shuffle(array){
        randomNumber = Math.floor((Math.random() * 100) + 19);
        $("#random-number").text(randomNumber);
        var i = array.length, j = 0, temp;
        while(i--) {
            j = Math.floor(Math.random() * (i+1))
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    shuffle(gemValue);
    console.log(gemValue);

    //Function that creates the random values of the 4 gems
    function randomValues(array){
        for(i = 0; i < numberOfGems; i++) {
            array.push(gemValue[i]);
        }
        return array;
    }
    randomValues(randomGemsValues);
    console.log(randomGemsValues);

    //Function that creates the sum of the values
    function sumOfValues(array){
        sumOfGems = 0;
        var r = [];
        for(i = 0; i < numberOfGems; i++) {
            r.push(Math.round(Math.random() * 8));
        }
        console.log(r);
        for(i = 0; i < numberOfGems; i++) {
            sumOfGems += r[i] * array[i];
        }
    }
    sumOfValues(randomGemsValues);
    console.log(sumOfGems);


    $("#1").on("click", function () {
        alert("Button clicked");
        $(this).val(parseInt(randomGemsValues[0]));
        console.log(this);
    });

    $("#2").on("click", function () {
        alert("Button clicked");
        $(this).val(parseInt(randomGemsValues[1]));
        console.log(this);
    });

    $("#3").on("click", function () {
        alert("Button clicked");
        $(this).val(parseInt(randomGemsValues[2]));
        console.log(this);
    });

    $("#4").on("click", function () {
        alert("Button clicked");
        $(this).val(parseInt(randomGemsValues[3]));
        console.log(this);
    });

    $(".number").on("click", function (){
        userSum += parseInt($(this).val());
        $("#user-score").text(userSum);
        if(randomNumber === userSum) {
            wins++;
            $("#wins").text(wins);
            resetGame();
            shuffle(gemValue);
            randomValues(randomGemsValues);
        } else if (userSum > randomNumber) {
            losses++;
            $("#losses").text(losses);
            resetGame();
            shuffle(gemValue);
            randomValues(randomGemsValues);
        }    
    })

    //This function resets the game
    function resetGame() {
        gemValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        numberOfGems = 4;
        randomGemsValues = [];
        sumOfGems = 0;
        userSum = 0;
        $("#user-score").text(userSum);
        randomNumber = 0;
        $("#random-number").text(randomNumber);
    }

})