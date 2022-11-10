
let letterTag = document.querySelector(".the-letters");

Array.from("abcdefghijklmnopqrstuvxwyz").forEach((l) => letterTag.innerHTML += `<span class="letter-box">${l}</span>`);

const words = {
  programming: ["p hp", "javascr ipt", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Presti ge", "Inceptio n", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albe rt Einstei n", "Hitch cock", "Alexander", "Cleopa tra", "Mahatma Ghandi"],
  countries: ["Sy ria", "Pa lestine", "Yem en", "Egypt", "Ba hrain", "Qatar"]
}

let allKeys = Object.keys(words);

// random number depend on key of words object
let randomNumCategory = Math.floor(Math.random() * allKeys.length);
// get random category 
let theCategory = words[allKeys[randomNumCategory]];


// get random item from prev category depend on count of item in category
let randomNumItems = Math.floor(Math.random() * theCategory.length);
let theItem = theCategory[randomNumItems];
console.log(theItem);




// Create Span depend on count Of Char Length
let letterGuessTag = document.querySelector(".letters-guess");
Array.from(theItem).forEach(function(char) {

  letterGuessTag.innerHTML += `<span>${char}</span>`
  let span = document.createElement("span");

  if (char === " ") {
    span.className = "with-space";
  }
  letterGuessTag.appendChild(span)


})




// Add Info to page
document.querySelector(".category span").innerHTML = allKeys[randomNumCategory];

let letters = document.querySelectorAll("letter-box");

console.log(letters)


// 52