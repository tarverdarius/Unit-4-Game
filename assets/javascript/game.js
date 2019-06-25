


$(document).ready(function () {

    var Random = Math.floor(Math.random() * 101 + 19)

    // Display random number
    $('#scoreToMatch').text(Random);



    var num1 = Math.floor(Math.random() * 12 + 1)
    var num2 = Math.floor(Math.random() * 12 + 1)
    var num3 = Math.floor(Math.random() * 12 + 1)
    var num4 = Math.floor(Math.random() * 12 + 1)



    var wins = 0;
    var losses = 0;
    var userScore = 0;







    $("#crystals").on("click", ".crystal-image", function () {

        function randomCharacter() {
            var randomNumber = Math.floor(Math.random() *
                options.length);
            computerChoice = options[randomNumber];

            console.log(computerChoice);
        }

    });




    // Reset game
    function reset() {
        Random = Math.floor(Math.random() * 120 + 19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        num1 = Math.floor(Math.random() * 12 + 1);
        num2 = Math.floor(Math.random() * 12 + 1);
        num3 = Math.floor(Math.random() * 12 + 1);
        num4 = Math.floor(Math.random() * 12 + 1);
        userScore = 0;
        $('#totalScore').text(userScore);
    }
    // wins
    function winning() {
        alert("Winner, Winner Chicken Dinner!");
        wins++;
        $('#wins').text(wins);
        reset();
    }
    //  losses
    function losing() {
        alert("LOOOSSSSEEERRRRRR!!!!");
        losses++;
        $('#losses').text(losses);
        reset()
    }
    // Clicking crystals
    $('.red').on('click', function () {
        userScore = userScore + num1;
        console.log("New userScore= " + userScore);
        $('#totalScore').text(userScore);
        //Win & lose conditions
        if (userScore == Random) {
            winning();
        }
        else if (userScore > Random) {
            losing();
        }
    })
    $('.blue').on('click', function () {
        userScore = userScore + num2;
        console.log("New userScore= " + userScore);
        $('#totalScore').text(userScore);
        if (userScore == Random) {
            winning();
        }
        else if (userScore > Random) {
            losing();
        }
    })
    $('.green').on('click', function () {
        userScore = userScore + num3;
        console.log("New userScore= " + userScore);
        $('#totalScore').text(userScore);

        if (userScore == Random) {
            winning();
        }
        else if (userScore > Random) {
            losing();
        }
    })
    $('.yellow').on('click', function () {
        userScore = userScore + num4;
        console.log("New userScore= " + userScore);
        $('#totalScore').text(userScore);

        if (userScore == Random) {
            winning();
        }
        else if (userScore > Random) {
            losing();
        }
    });
});


