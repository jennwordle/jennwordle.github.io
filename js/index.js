let word_list = [];
let currWord = "";
let currRow = 1;
let currCol = 1;
const placeholder = "\t"

$(document).ready(function(){
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
            let id = ".g" + r.toString() + "-" + c.toString();
            $(id).text(placeholder);
        }
    }
    return;
}

function play_game() {
    currWord = word_list[Math.floor(Math.random() * word_list.length)];
    console.log("Selected: ", currWord);
    return;
}

function check_word() { // returns true if word matches, false otherwise
    let typedWord = "";
    for (let c = 1; c <= 5; c++) {
        let id = ".g" + currRow.toString() + "-" + c.toString();
        typedChar = $(id).text().toLowerCase();
        typedWord += typedChar;
    }
    console.log("Typed: ", typedWord);

     // invalid word
    if (!word_list.includes(typedWord)) {
        console.log("INVALIDWORD");

        for (let c = 1; c <= 5; c++) {
            let id = ".g" + currRow.toString() + "-" + c.toString();
            $(id).text(placeholder);
        }

        currRow-=1;
        currCol = 1;

        return false;
    }

    for (let c = 1; c <= 5; c++) {
        let id = ".g" + currRow.toString() + "-" + c.toString();
        typedChar = $(id).text().toLowerCase();

        if (currWord.includes(typedChar) && currWord.charAt(c-1) === typedChar) {
            $(id).css("background-color", "green");
        }
        else if (currWord.includes(typedChar) && currWord.charAt(c-1) !== typedChar) {
            $(id).css("background-color", "yellow");
        }
        else {
            $(id).css("background-color", "lightgray");
        }
    }

    // won game
    if (typedWord === currWord) {
        window.alert("Congrats! You've won!");
        return true;
    }

    return false;
}

function end_game() {
    window.alert("The correct word was: " + currWord);
}

$("body").keydown(function(e){
    console.log(currRow + " " + currCol);
    if (e.repeat) { // prevent repeats from key held down
        return;
    }
    if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
        // character entered
        let id = ".g" + currRow.toString() + "-" + currCol.toString();
        $(id).text(String.fromCharCode(e.which).toUpperCase());

        currCol += 1;
        if (currCol > 5) {
            let done = check_word();
            if (done) {
                console.log("ENDGAME");
                end_game();
                return
            }

            currRow += 1;
            currCol = 1;
            if (currRow > 6) {
                check_word()
                console.log("ENDGAME");
                end_game();
                return;
            }
        }
    }
    else if (e.keyCode == 8) {
        // delete entered
        if (currCol > 1) {
            currCol -= 1;
        }

        let id = ".g" + currRow.toString() + "-" + currCol.toString();
        $(id).text(placeholder);
    }
});
