const quotesMotivation = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
    "The road to success and the road to failure are almost exactly the same.", 
    "I never dreamed about success. I worked for it.", 
    "Setting goals is the first step in turning the invisible into the visible.", 
    "When we strive to become better than we are, everything around us becomes better too."
];

const nameAuthor = [
    "Winston Churchill",
    "Colin Davis",
    "Estee Lauder",
    "Tony Robbins",
    "Paulo Coelho"
];


const motivationQuote = document.querySelector(".quote"),
authorsName = document.querySelector(".author .name"),
motivationQuoteBtn = document.querySelector(".btn-motivationl");

motivationQuoteBtn.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotesMotivation.length);
    motivationQuote.innerHTML = quotesMotivation[randomIndex];
});

motivationQuoteBtn.addEventListener("click", function() {
    const currentQuote = motivationQuote.innerHTML;
    const quoteIndex = quotesMotivation.indexOf(currentQuote);
    if (quoteIndex !== -1) {
        authorsName.innerHTML = nameAuthor[quoteIndex];
    }
});
