$(document).ready(function(){
    console.log("Hereddd");
    $.getJSON("resources/five_letter_words.json", function(json) {
        console.log(json); // this will show the info it in firebug console
    });
})
