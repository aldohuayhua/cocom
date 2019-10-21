$(document).ready(function () {
    var answerCorrectText = "Thats right!";
    var answerWrongText = "No thats incorrect, the correct answer is:";
    var answerTimesUpText = "Time is up! the correct answer is:"
    var submitInput = $('<input type="submit" value="Submit">');
    var nextQuestionsButton = $('<input type="submit" value="Next Question">');
    var wins = 0;
    var loss = 0;
    var unanswered = 0;
    var currentTrivia = 0;

    var startButton = $("<button>").text("START");
    $("#answerDisplay1").html(startButton).show();
    $("#timerDisplay").hide();
    startButton.on("click", function () {
        trivia();
    });

    function timeConverter(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }

    function trivia() {
        var time = 30;
        var intervalId = setInterval(count, 1000);
        $("#timerDisplay").show();
        startButton.hide();
        var correctAnswer1 = "B1";
        $("#questionDisplay1").text("What was the name of the high school where Walter White taught chemistry?");
        $("#firstChoice1").html('<input type="radio" name="currentQuestion1" value="A1" class="activeQuestion">Albuquerque Senior High </input>').show();
        $("#secondChoice1").html('<input type="radio" name="currentQuestion1" value="B1" class="activeQuestion">J.P. Wynne High School </input>"').show();
        $("#thirdChoice1").html('<input type="radio" name="currentQuestion1" value="C1" class="activeQuestion"> Rio Rancho High School </input>"').show();
        $("#fourthChoice1").html('<input type="radio" name="currentQuestion1" value="D1" class="activeQuestion">Santa Ana High School </input>"').show();

        var correctAnswer2 = "C2";
        $("#questionDisplay2").text("What was Jesse Pinkman's license plate?");
        $("#firstChoice2").html('<input type="radio" name="currentQuestion2" value="A2" class="activeQuestion">YEAHBTCH</input>"').show();
        $("#secondChoice2").html('<input type="radio" name="currentQuestion2" value="B2" class="activeQuestion">CAPN COOK</input>"').show();
        $("#thirdChoice2").html('<input type="radio" name="currentQuestion2" value="C2" class="activeQuestion">THE CAPN</input>"').show();
        $("#fourthChoice2").html('<input type="radio" name="currentQuestion2" value="D2" class="activeQuestion">GO AWAY</input>"').show();

        var correctAnswer3 = "A3";
        $("#questionDisplay3").text("In the final season, Walt buries all of his money in the desert when he realizes Hank knows he is the Heisenberg. How much money did he have?");
        $("#firstChoice3").html('<input type="radio" name="currentQuestion3" value="A3" class="activeQuestion">80 Million</input>"').show();
        $("#secondChoice3").html('<input type="radio" name="currentQuestion3" value="B3" class="activeQuestion">175 Million</input>"').show();
        $("#thirdChoice3").html('<input type="radio" name="currentQuestion3" value="C3" class="activeQuestion">65 Million</input>"').show();
        $("#fourthChoice3").html('<input type="radio" name="currentQuestion3" value="D3" class="activeQuestion">93 Million</input>"').show();


        $("#submitButton").html(submitInput);

        $("#answerDisplay").hide();
        $("#mutipleChoiceDisplay").hide();
        function count() {
            time--;
            var timeConverted = timeConverter(time);
            $("#timerDisplay").html("Your remaining time is: " + timeConverted);
            if (time === 0) {
                clearInterval(intervalId)
                unanswered++;
                $("#timerDisplay").hide();
                $("#submitButton").hide();
                $("#questionDisplay1").hide();
                $("#firstChoice1").hide();
                $("#secondChoice1").hide();
                $("#thirdChoice1").hide();
                $("#fourthChoice1").hide();
                $("#questionDisplay2").hide();
                $("#firstChoice2").hide();
                $("#secondChoice2").hide();
                $("#thirdChoice2").hide();
                $("#fourthChoice2").hide();
                $("#questionDisplay3").hide();
                $("#firstChoice3").hide();
                $("#secondChoice3").hide();
                $("#thirdChoice3").hide();
                $("#fourthChoice3").hide();
                var winsDisplay = $("<div>").text("wins: ");
                winsDisplay.append(wins);
                $("#container").append(winsDisplay);
                var lossDisplay = $("<div>").text("loss: ");
                lossDisplay.append(loss);
                $("#container").append(lossDisplay);
                var noAnswerDisplay = $("<div>").text("No Answer: ");
                noAnswerDisplay.append(unanswered);
                $("#container").append(noAnswerDisplay);
            };
        };
        $(":radio[name=currentQuestion1]").change(function () {
            userSelection1 = this.value;
            $("#submitButton").on("click", function () {
                if (userSelection1 === correctAnswer1) {
                    clearInterval(intervalId);
                    $("#questionDisplay1").hide();
                    $("#firstChoice1").hide();
                    $("#secondChoice1").hide();
                    $("#thirdChoice1").hide();
                    $("#fourthChoice1").hide();
                    wins++;
                    $("#submitButton").hide();
                    $("#timerDisplay").hide();
                } else {
                    clearInterval(intervalId);
                    $("#questionDisplay1").hide();
                    $("#firstChoice1").hide();
                    $("#secondChoice1").hide();
                    $("#thirdChoice1").hide();
                    $("#fourthChoice1").hide();
                    loss++;
                    $("#timerDisplay").hide();
                    $("#submitButton").hide();
                };
            });
        });
        $(":radio[name=currentQuestion2]").change(function () {
            userSelection2 = this.value;
            $("#submitButton").on("click", function () {
                if (userSelection2 === correctAnswer2) {
                    clearInterval(intervalId);
                    $("#questionDisplay2").hide();
                    $("#firstChoice2").hide();
                    $("#secondChoice2").hide();
                    $("#thirdChoice2").hide();
                    $("#fourthChoice2").hide();
                    wins++;
                    $("#submitButton").hide();
                    $("#timerDisplay").hide();
                } else {
                    $("#questionDisplay2").hide();
                    clearInterval(intervalId);
                    $("#firstChoice2").hide();
                    $("#secondChoice2").hide();
                    $("#thirdChoice2").hide();
                    $("#fourthChoice2").hide();
                    loss++;
                    $("#timerDisplay").hide();
                    $("#submitButton").hide();
                };
            });
        });
        $(":radio[name=currentQuestion3]").change(function () {
            userSelection3 = this.value;
            $("#submitButton").on("click", function () {
                if (userSelection3 === correctAnswer3) {
                    clearInterval(intervalId);
                    $("#questionDisplay3").hide();
                    $("#firstChoice3").hide();
                    $("#secondChoice3").hide();
                    $("#thirdChoice3").hide();
                    $("#fourthChoice3").hide();
                    wins++;
                    $("#submitButton").hide();
                    $("#timerDisplay").hide();
                    var winsDisplay = $("<div>").text("wins: ");
                    winsDisplay.append(wins);
                    $("#container").append(winsDisplay);
                    var lossDisplay = $("<div>").text("loss: ");
                    lossDisplay.append(loss);
                    $("#container").append(lossDisplay);
                    var noAnswerDisplay = $("<div>").text("No Answer: ");
                    noAnswerDisplay.append(unanswered);
                    $("#container").append(noAnswerDisplay);
                } else {
                    $("#questionDisplay3").hide();
                    clearInterval(intervalId);
                    $("#firstChoice3").hide();
                    $("#secondChoice3").hide();
                    $("#thirdChoice3").hide();
                    $("#fourthChoice3").hide();
                    loss++;
                    $("#timerDisplay").hide();
                    $("#submitButton").hide();
                    var winsDisplay = $("<div>").text("wins: ");
                    winsDisplay.append(wins);
                    $("#container").append(winsDisplay);
                    var lossDisplay = $("<div>").text("loss: ");
                    lossDisplay.append(loss);
                    $("#container").append(lossDisplay);
                    var noAnswerDisplay = $("<div>").text("No Answer: ");
                    noAnswerDisplay.append(unanswered);
                    $("#container").append(noAnswerDisplay);
                };
            });
        });
    }


    // function question3() {
    //     var time = 10;
    //     var intervalId = setInterval(count, 1000);
    //     $("#timerDisplay").show();
    //     startButton.hide();
    //     var correctAnswer = "A";
    //     $("#submitButton").show();
    //     $("#submitButton").html(submitInput);
    //     $("#answerDisplay").hide();
    //     $("#mutipleChoiceDisplay").hide();
    //     function count() {
    //         time--;
    //         var timeConverted = timeConverter(time);
    //         $("#timerDisplay").html("Your remaining time is: " + timeConverted);
    //         if (time === 0) {
    //             clearInterval(intervalId);
    //             $("#firstChoice").hide();
    //             $("#secondChoice").hide();
    //             $("#thirdChoice").hide();
    //             $("#fourthChoice").hide();
    //             $("#questionDisplay").text(answerTimesUpText);
    //             $("#answerDisplay").text('Walter may have initially wanted to make $737,000 in season one, but after his rise to become a huge meth kingpin, that goal quickly multiplied. When Walt buries his money in the desert, he has seven barrels totaling $80 million. Todds uncle Jack and his Nazi crew end up stealing most of Walts money in what Walt believed to be an exchange to save Hanks life in a gruesome shootout. Instead, Jack leaves Walt with about $10-$11 million in one barrel and drops Hank and his partner Steve Gomez in the holes where the money was buried.').show();
    //             $("#mutipleChoiceDisplay").html('<img src="../cocom/assets/images/correctAnswersImages/questionThreeImage.jpg" height="200px">').show();
    //             loss++;
    //             $("#timerDisplay").hide();
    //             $("#submitButton").hide();
    //             setTimeout(function () {
    //                 clearInterval(intervalId);
    //                 console.log("time ran out question 3, log")

    //             }, 5000);
    //         };
    //     };
    //     $(":radio[name=currentQuestion]").change(function () {
    //         userSelection = this.value;
    //         $("#submitButton").on("click", function submitQuestionThree() {
    //             if (userSelection === correctAnswer) {
    //                 clearInterval(intervalId);
    //                 $("#firstChoice").hide();
    //                 $("#secondChoice").hide();
    //                 $("#thirdChoice").hide();
    //                 $("#fourthChoice").hide();
    //                 $("#questionDisplay").text(answerCorrectText);
    //                 $("#answerDisplay").text('Walter may have initially wanted to make $737,000 in season one, but after his rise to become a huge meth kingpin, that goal quickly multiplied. When Walt buries his money in the desert, he has seven barrels totaling $80 million. Todds uncle Jack and his Nazi crew end up stealing most of Walts money in what Walt believed to be an exchange to save Hanks life in a gruesome shootout. Instead, Jack leaves Walt with about $10-$11 million in one barrel and drops Hank and his partner Steve Gomez in the holes where the money was buried.').show();
    //                 $("#mutipleChoiceDisplay").html('<img src="../cocom/assets/images/correctAnswersImages/questionThreeImage.jpg" height="200px">').show();
    //                 wins++;
    //                 $("#submitButton").hide();
    //                 $("#timerDisplay").hide();
    //                 setTimeout(function () {
    //                     clearInterval(intervalId);
    //                     console.log("correct asnwer selected question 3, log")
    //                 }, 5000);
    //             } else {
    //                 clearInterval(intervalId);
    //                 $("#firstChoice").hide();
    //                 $("#secondChoice").hide();
    //                 $("#thirdChoice").hide();
    //                 $("#fourthChoice").hide();
    //                 $("#questionDisplay").text(answerWrongText);
    //                 $("#answerDisplay").text('Walter may have initially wanted to make $737,000 in season one, but after his rise to become a huge meth kingpin, that goal quickly multiplied. When Walt buries his money in the desert, he has seven barrels totaling $80 million. Todds uncle Jack and his Nazi crew end up stealing most of Walts money in what Walt believed to be an exchange to save Hanks life in a gruesome shootout. Instead, Jack leaves Walt with about $10-$11 million in one barrel and drops Hank and his partner Steve Gomez in the holes where the money was buried.').show();
    //                 $("#mutipleChoiceDisplay").html('<img src="../cocom/assets/images/correctAnswersImages/questionThreeImage.jpg" height="200px">').show();
    //                 loss++;
    //                 $("#submitButton").hide();
    //                 $("#timerDisplay").hide();
    //                 setTimeout(function () {
    //                     clearInterval(intervalId);
    //                     console.log("incorrect answer selected question 3, log")
    //                 }, 5000);

    //             }
    //         });
    //     });
    // }
    // ------------------------------------------------------
    // function question4() {
    //     var time = 10;
    //     var intervalId = setInterval(count, 1000);
    //     $("#timerDisplay").show();
    //     startButton.hide();
    //     var correctAnswer = "D";
    //     $("#questionDisplay").text("What was the name of Hank Schrader's homemade beer?");
    //     var inputA = $('<input type="radio" name="currentQuestion" value="A" class="activeQuestion">Schrader Ale</input>"');
    //     $("#firstChoice").html(inputA).show();
    //     var inputB = $('<input type="radio" name="currentQuestion" value="B" class="activeQuestion">Uncle Hanks Brew</input>"');
    //     $("#secondChoice").html(inputB).show();
    //     var inputC = $('<input type="radio" name="currentQuestion" value="C" class="activeQuestion">Hankeken</input>"');
    //     $("#thirdChoice").html(inputC).show();
    //     var inputD = $('<input type="radio" name="currentQuestion" value="D" class="activeQuestion">Schraderbrau</input>"');
    //     $("#fourthChoice").html(inputD).show();
    //     $("#submitButton").show();
    //     $("#submitButton").html(submitInput);
    //     $("#answerDisplay").hide();
    //     $("#mutipleChoiceDisplay").hide();
    //     function count() {
    //         time--;
    //         var timeConverted = timeConverter(time);
    //         $("#timerDisplay").html("Your remaining time is: " + timeConverted);
    //         if (time === 0) {
    //             clearInterval(intervalId)
    //             $("#firstChoice").hide();
    //             $("#secondChoice").hide();
    //             $("#thirdChoice").hide();
    //             $("#fourthChoice").hide();
    //             $("#questionDisplay").text(answerTimesUpText);
    //             $("#answerDisplay").text('Hanks side project and free-time garage passion was making his finest Schraderbräu — "home-brewed to silky perfection."').show();
    //             $("#mutipleChoiceDisplay").html('<img src="../cocom/assets/images/correctAnswersImages/questionFourImage.jpg" height="200px">').show();
    //             loss++;
    //             clearInterval(intervalId);
    //             $("#timerDisplay").hide();
    //             $("#submitButton").hide();
    //             setTimeout(function () {
    //                 question4();
    //             }, 5000);
    //         }
    //     }
    //     $(":radio[name=currentQuestion]").change(function () {
    //         userSelection = this.value;
    //         $("#submitButton").on("click", function () {
    //             if (userSelection === correctAnswer) {
    //                 $("#firstChoice").hide();
    //                 $("#secondChoice").hide();
    //                 $("#thirdChoice").hide();
    //                 $("#fourthChoice").hide();
    //                 $("#questionDisplay").text(answerCorrectText);
    //                 $("#answerDisplay").text('Hanks side project and free-time garage passion was making his finest Schraderbräu — "home-brewed to silky perfection."').show();
    //                 $("#mutipleChoiceDisplay").html('<img src="../cocom/assets/images/correctAnswersImages/questionFourImage.jpg" height="200px">').show();
    //                 wins++;
    //                 clearInterval(intervalId);
    //                 $("#submitButton").hide();
    //                 $("#timerDisplay").hide();
    //                 setTimeout(function () {
    //                     question4();
    //                 }, 5000);
    //             } else {
    //                 $("#firstChoice").hide();
    //                 $("#secondChoice").hide();
    //                 $("#thirdChoice").hide();
    //                 $("#fourthChoice").hide();
    //                 $("#questionDisplay").text(answerWrongText);
    //                 $("#answerDisplay").text('Hanks side project and free-time garage passion was making his finest Schraderbräu — "home-brewed to silky perfection."').show();
    //                 $("#mutipleChoiceDisplay").html('<img src="../cocom/assets/images/correctAnswersImages/questionFourImage.jpg" height="200px">').show();
    //                 loss++;
    //                 clearInterval(intervalId);
    //                 $("#submitButton").hide();
    //                 $("#timerDisplay").hide();
    //                 setTimeout(function () {
    //                     question5();
    //                 }, 5000);

    //             }
    //         });
    //     });
    // }

});