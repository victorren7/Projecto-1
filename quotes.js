// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
{ quote: 'I once cried because I had no shoes to play soccer, but one day, I met a man who had no feet.', source: 'Zinedine Zidane', category:', Professional Athlete' },
{ quote:'You have to fight to reach your dream. You have to sacrifice and work hard for it.', source:'Messi', category:', Professional Athlete' },
{ quote:"Don't cry because it's over, smile because it happened.", source: 'Dr.sues', category:', Book writer' },
{ quote:'"Live as if you were to die tomorrow. Learn as if you were to live forever.', source:'Ghandi', category:', International Politics'},
{ quote:"I have not failed. I've just found 10,000 ways that won't work.", source:'Thomas Edison', category:', Business Man'},
{ quote: 'There’s no “I” in denial.', source: 'Peter Serafinowicz', category: ', Actor'},
];

quotes.length
quotes[0]
quotes [quotes.length - 1]

//var fractional = Math.random() * quotes.length;
//var random_index = Math.floor(fractional);
//var quote = quotes[random_index];
//quotes[quotes.length - 1]

var random_quote = quotes[Math.floor(Math.random() * quotes.length)];

 // somewhere between 0 and any_number
Math.floor()

function getRandomQuote() {
   return quotes[Math.floor(Math.random () * quotes.length)]
};

function color() {
  var red = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var green  = Math.floor(Math.random() * 256);
  var rgb = "rgb(" + red + " , " + green + ", " + blue + ")";
  return rgb
};

function printQuote()  {
  var background = color();
  var randomQuote = getRandomQuote();
  var display ='';


  // display = display + something;
  display += '<p class="quote">' + randomQuote.quote + "</p>";
  display += '<p class="source">' + randomQuote.source + randomQuote.category +  "</p>";



  // finish this
  //   <p class="source">Zinedine Zidane>
  //   <span class="category">soccer</span>




  console.log(randomQuote.quote)
  console.log(randomQuote.source)
  console.log(randomQuote.category)

  document.getElementById("quote-box").innerHTML = display;
  document.body.style.backgroundColor = background;
  document.getElementById("loadQuote").style.backgroundColor = background;
};

printQuote();

printQuote()

setInterval(printQuote, 7000)
