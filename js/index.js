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
    for (let r = 1; r <= 6; r++) {
        for (let c = 1; c <= 5; c++) {
            id = ".g" + r.toString() + "-" + c.toString();
            console.log(id);
            $(id).empty();
        }
    }
    return;
}

function play_game() {
    const randomWord = word_list[Math.floor(Math.random() * word_list.length)];
    console.log(randomWord);
    return;
}
