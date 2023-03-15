const quotesMotivation = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
    "The road to success and the road to failure are almost exactly the same.", 
    "I never dreamed about success. I worked for it.", 
    "Setting goals is the first step in turning the invisible into the visible.", 
    "When we strive to become better than we are, everything around us becomes better too",
    "It is never too late to be what you might have been.",
    "Talent wins games, but teamwork and intelligence win championships.",
    "You've got to get up every morning with determination if you're going to go to bed with satisfaction.",
    "Education is the most powerful weapon which you can use to change the world.",
    "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
    "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
    "When you change your thoughts, remember to also change your world.",
    "Learn as if you will live forever, live like you will die tomorrow.",
    "Don’t let yesterday take up too much of today."
];

const nameAuthor = [
    "Winston Churchill",
    "Colin Davis",
    "Estee Lauder",
    "Tony Robbins",
    "Paulo Coelho",
    "George Eliot",
    "Michael Jordan",
    "George Lorimer",
    "Nelson Mandela",
    "John Wooden",
    "Mark Twain",
    "Diane McLaren",
    "Norman Vincent Peale",
    "Mahatma Gandhi",
    "Will Rogers"
];


const motivationQuote = document.querySelector(".quote"),
authorsName = document.querySelector(".author .name"),
motivationQuoteBtn = document.querySelector(".btn-motivationl"),
copyBtn = document.querySelector(".copy"),
soundBtn = document.querySelector(".sound");

motivationQuoteBtn.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotesMotivation.length);
    motivationQuote.innerHTML = quotesMotivation[randomIndex];
    const currentQuote = motivationQuote.innerHTML;
    const quoteIndex = quotesMotivation.indexOf(currentQuote);
    if (quoteIndex !== -1) {
        authorsName.innerHTML = nameAuthor[quoteIndex];
    }
});



soundBtn.addEventListener("click", ()=> {
    let utterance = new SpeechSynthesisUtterance(`${motivationQuote.innerHTML} by ${authorsName.innerHTML}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(motivationQuote.innerHTML);
    copyBtn.innerHTML = "Copied";
    setTimeout(() => {
        copyBtn.innerHTML = "<i class='fa fa-copy'></i>";
    }, 2000); 
  });