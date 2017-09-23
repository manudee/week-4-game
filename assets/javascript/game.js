
//global variables
var mainScore;
var totalScore = 0;
var wins = 0;
var losses = 0;
var crystal1Value;
var crystal2Value;
var crystal3Value;
var crystal4Value;

//Random generator common function to be used for crystal random as well as global random
function randomGenerator(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
};


$(document).ready(function() {
crystal1Value = randomGenerator(1,12);
crystal2Value = randomGenerator(1,12);
crystal3Value = randomGenerator(1,12);
crystal4Value = randomGenerator(1,12);
mainScore =  randomGenerator(19,120);

$(".mainScore").html();

$("#mainScore").html( "<h2>" + mainScore + "</h2>" );
console.log("Main Score " + mainScore);
console.log("TotalScore " + totalScore);
$("#totalScore").html( "<h2>" + totalScore + "</h2>" );
});


function crystalRandom() {
crystal1Value = randomGenerator(1,12);
crystal2Value = randomGenerator(1,12);
crystal3Value = randomGenerator(1,12);
crystal4Value = randomGenerator(1,12);
mainScore =  randomGenerator(19,120);
totalScore = 0;
console.log("in Crystal Random " );
console.log("Main Score " + mainScore);
console.log("totalSCore " + totalScore);
console.log("crystal1Value " + crystal1Value);
console.log("crystal2Value " + crystal2Value);
console.log("crystal3Value " + crystal3Value);
console.log("crystal4Value " + crystal4Value);
$("#mainScore").html( "<h2>" + mainScore + "</h2>" );
$("#totalScore").html( "<h2>" + totalScore + "</h2>" );
}



function checker(){
	if (totalScore > mainScore){
		console.log("You lose")
		losses++;
        $("#losses").html("<h2>" + losses + "</h2>" );
		console.log("Losses " + losses);
		crystalRandom();
        

		}
		//losses++, call Reset function
	else if (totalScore === mainScore ){
		console.log("You win")	
		wins++;
        $("#wins").html("<h2>" + wins + "</h2>");
		console.log("Wins " + wins);
		crystalRandom();
        
		}
}


 $(document).ready(function() {
    $("#crystal1" ).on("click", function() {
          
            console.log("clicked on crystal1")
            
            console.log("crystal1Value " + crystal1Value);
            totalScore = totalScore + crystal1Value;
            console.log("totalSCore " + totalScore);
            $("#totalScore").html( "<h2>" + totalScore + "</h2>" );
            checker();
    });
});


$(document).ready(function() {
    $("#crystal2" ).on("click", function() {
           
            console.log("clicked on crystal2")
            console.log("crystal2Value " + crystal2Value);
            totalScore = totalScore + crystal2Value;
            console.log("totalSCore " + totalScore);
            $("#totalScore").html( "<h2>" + totalScore + "</h2>" );
            checker();
    });
});


$(document).ready(function() {
    $("#crystal3" ).on("click", function() {
           
            console.log("clicked on crystal3")
            console.log("crystal3Value " + crystal3Value);
            totalScore = totalScore + crystal3Value;
            console.log("totalSCore " + totalScore);
            $("#totalScore").html( "<h2>" + totalScore + "</h2>" );
            checker();
    });
});


$(document).ready(function() {
    $("#crystal4" ).on("click", function() {
           
            console.log("clicked on crystal4")
            console.log("crystal4Value " + crystal4Value);
            totalScore = totalScore + crystal4Value;
            console.log("totalSCore " + totalScore);
            $("#totalScore").html( "<h2>" + totalScore + "</h2>" );
            checker();
    });
});





