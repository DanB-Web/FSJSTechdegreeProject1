/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [					//Initialise arrays of quotes inside objects

{quote:"Quote 1", 
source:"Source 1", citation:"Citation 1", year:"Year 1", tag:"Tag 1"},

{quote:"Quote 2",
source:"Source 2", citation:"Citation 2", year:"Year 2", tag:"Tag 2"},

{quote:"Quote 3", 
source:"Source 3", citation:"Citation 3", year:"Year 3", tag:"Tag 3"},

{quote:"Quote 4", 
source:"Source 4", citation:0, year:"Year 4", tag:"Tag 4"},

{quote:"Quote 5", 
source:"Source 5", citation:0, year:"Year 5", tag:"Tag 5"},

{quote:"Quote 6", 
source:"Source 6", citation:0, year:"Year 6", tag:"Tag 6"},

{quote:"Quote 7", 
source:"Source 7", citation:0, year:"Year 7", tag:"Tag 7"},

{quote:"Quote 8", 
source:"Source 8", citation:0, year:"Year 8", tag:"Tag 8"}

];

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {	//Function to return a random object within the array

	var temp =  Math.floor(Math.random()*quotes.length);
	return quotes[temp];

}

function randomColor() {		//Function to generate random background color

	var color = ['lightgreen', 'lightpink', 'wheat', 'lemonchiffon', 'lightblue', 'plum', 'lightgrey', 'honeydew'];

	return color[Math.floor(Math.random()*color.length)];

}

/***
 * `printQuote` function
***/

function printQuote () {					//Function to build HTML string from quotes array

	var temp = getRandomQuote();			//Call for a random object from the array
	
	var html = '<p class = "quote">' + temp.quote + '</p>'; //Build the HTML string
	 
	html += '<p class= "source">' + temp.source + '';

	if (temp.citation != 0) {

		html += '<span class="citation">' + temp.citation + '</span>';
	}

	if (temp.year != 0) {
		html += '<span class="year">' + temp.year + '</span>';
	}

	if (temp.tag != 0) {
		html += '<span class="tag">' + temp.tag + '</span>';
	}

	html += '</p>';

	document.getElementById("quote-box").innerHTML = html;	//Send new HTML string to quote-box div
	document.body.style.background = randomColor();  //Send random background color to body element
}	

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);