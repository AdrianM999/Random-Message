const quotesMotivation = [
    "Success is not final; failure is not fatal: It is the courage to continue that counts.", 
    "The road to success and the road to failure are almost exactly the same.", 
    "I never dreamed about success. I worked for it.", 
    "Setting goals is the first step in turning the invisible into the visible.", 
    "When we strive to become better than we are, everything around us becomes better too."
];

const funnyJokes = [
    "What did one ocean say to the other ocean? Nothing, it just waved.",
    "Do you want to hear a construction joke? Sorry, I am still working on it.",
    "Why did the bullet end up losing his job? He got fired.",
    "The first rule of the Alzheimer's club is… Wait, where are we again?",
    "Why does not Dracula have any friends? Well, honestly, he is a real pain in the neck."
];
const motivationQuote = document.querySelector(".quote"),
motivationQuoteBtn = document.querySelector(".btn-motivationl");

motivationQuoteBtn.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotesMotivation.length);
    motivationQuote.innerHTML = quotesMotivation[randomIndex];
});

const jokesFunny = document.querySelector(".funny-quote"),
jokesFunnyBtn = document.querySelector(".btn");

jokesFunnyBtn.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * funnyJokes.length);
    jokesFunny.innerHTML = funnyJokes[randomIndex];
});