$(document).ready(function () {
var questionsOneChoices = ["Albuquerque Senior High", "J.P. Wynne High School", "Rio Rancho High School", "Santa Ana High School"];
var questionAndAnswerOne = ["What was the name of the high school where Walter White taught chemistry?", "Walter White is a chemistry teacher at the fictional J.P. Wynne High School in Rio Rancho, NM. Interestingly enough, the name of the actual school where the show was filmed is called Rio Rancho High School, but you probably remember it as the place where Walter stole the necessary gear for his and Jesses first cook."];
var questionTwoArray = ["What was Jesse Pinkman's license plate?", "YEAHBTCH", "CAPN COOK", "THE CAPN", "GO AWAY", "During the pilot episode of Breaking Bad, Hank Schrader takes his brother-in-law Walt on a ride along to bust a meth lab run by Jesse and Emilio. While the DEA is inside the house, viewers (and a curious Walter) witness Jesse escape through a bedroom window and drive away in his 1982 Chevrolet Monte Carlo. The license plate, THE CAPN, refers to Jesses then-street name, Capn Cook"];

var individualAnswersSelectionDiv = $("<div>");
$("#questionHoldingDiv").append(questionAndAnswerOne[0]);

for(i = 0 ; i < questionsOneChoices.length ; i++){
    answerSelections = questionsOneChoices[i];
    var buttons = $("<button>").text(answerSelections);
    var p = $("<p>").append(buttons);
    individualAnswersSelectionDiv.append(p);
    $("#answersSelectionDiv").append(individualAnswersSelectionDiv);
}
});