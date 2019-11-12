/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `Initialise array of objects to contain quotes and related info
***/

var quotes = [					

{quote:"The way to get started is to quit talking and begin doing", 
source:"Walt Disney", citation:0, year:0, tag:"American Businessman"},

{quote:"Look back over the past, with its changing empires that rose and fell, and you can foresee the future, too",
source:"Marcus Aurelius", citation:"Meditations", year:"161-180 CE", tag:"Roman Emperor"},

{quote:"If a man knows not to which port he sails, no wind is favorable", 
source:"Seneca the Younger", citation:"Moral letters to Lucilius; Letter LXXI", year:0, tag:"Stoic Philosopher"},

{quote:"As is a tale, so is life: not how long it is, but how good it is, is what matters", 
source:"Seneca the Younger", citation:0, year:0, tag:"Stoic Philosopher"},

{quote:"I am convinced that life is 10% what happens to me and 90% of how I react to it.",
source:"Charles R. Swindoll", citation:0, year:0, tag:"American Clergyman"},

{quote:"It does not matter how slowly you go as long as you don't stop", 
source:"Confucius", citation:0, year:0, tag:"Chinese Philosopher"},

{quote:"The pain you feel today will be the strength you feel tommorow", 
source:"Unknown", citation:0, year:0, tag:0},

{quote:"Knowing is not enough; we must apply. Willing is not enough; we must do", 
source:"Johann Wolfgang von Goethe ", citation:0, year:0, tag:"German Statesman"}

];

/***
 * Function to return a pseudo-random quote object from the array when called by the printQuote function
***/

function getRandomQuote () {	

	var temp =  Math.floor(Math.random()*quotes.length);
	return quotes[temp];

}

/***
 * Function to generate a pseudo-random background color from a pre-defined array when called printQuote function
***/

function randomColor() {

	var color = ['lightgreen', 'lightpink', 'wheat', 'lemonchiffon', 'lightblue', 'plum', 'lightgrey', 'honeydew'];

	return color[Math.floor(Math.random()*color.length)];

}

/***
 * Main function to generate an html string from a pseudo-random array object, and also return an acoompannying pseudo-random background color
***/

function printQuote () {					

	var temp = getRandomQuote();			//Call for a random object from the array
	
	var html = '<p class = "quote">' + temp.quote + '</p>'; //Start to build the HTML string
	 
	html += '<p class= "source">' + temp.source + '';

	if (temp.tag != 0) {									//If statements to check if the called object includes tags, citaitons and/or year fields
		html += '<span class="tag">' + temp.tag + '</span>';
	}

	if (temp.citation != 0) {

		html += '<span class="citation">' + temp.citation + '</span>';
	}

	if (temp.year != 0) {
		html += '<span class="year">' + temp.year + '</span>';
	}

	html += '</p>';				//Close generated html string

	document.getElementById("quote-box").innerHTML = html;	//Send new HTML string to quote-box div
	document.body.style.background = randomColor();  //Send random background color to body element
}	

/***
 * Timer to change quote every 20 seconds
***/

setInterval(printQuote, 20000); 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);