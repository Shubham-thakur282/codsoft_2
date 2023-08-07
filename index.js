
function toggleWord(){

    let words = ["#word-1","#word-2","#word-3"]
    let currentWordIndex = 0;

    function nextWord(){
        let currentWord  = $(words[currentWordIndex])
        currentWord.removeClass("change-word");
        currentWord.addClass("unhide");
        setTimeout(function(){
            currentWord.removeClass("unhide");
            currentWord.addClass("change-word");
            currentWordIndex = (currentWordIndex+1)%words.length;
            nextWord();
        },3000)
    }
    nextWord();
}

toggleWord();



