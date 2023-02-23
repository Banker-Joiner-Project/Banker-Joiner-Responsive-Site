var keyCode = [65, 90, 69, 66, 65, 78, 13]; // spell out azeban then press enter
var ind = 0; //starts index at 0 so we can increment it up
$(document).keyup(function(event) {
    console.log(event.keyCode);
    if (event.which === keyCode[ind]) {
        ind++;  // adds 1 to index if input code correctly making it to where it will be 11 in total
    } else {
        ind = 0; // this it to reset the code if typed wrong
    }
    if (ind === keyCode.length) { // once ind = 11 it will successfully pass through this if statement and reset it to zero
        ind = 0;
        alert('Thank You!');

        var fireAudio = $('#fireworksAudio');
        fireAudio[0].play();
        var cheerAudio = $('#cheersAudio');
        setTimeout(function () {
            cheerAudio[0].play();
        }, 5000);
    }



});