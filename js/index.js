let word_list = [];

$(document).ready(function(){
    console.log("Hereddd");
    $.getJSON("https://jennwordle.github.io/resources/five_letter_words.json", function(words_json) {
        console.log(words_json); // this will show the info it in firebug console
        word_list = words_json;

        reset_game();
        play_game();
    });
})

function reset_game() {
    return;
}

function play_game() {
    const randomWord = word_list[Math.floor(Math.random() * word_list.length)];
    console.log(randomWord);
    return;
}
