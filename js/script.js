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

{quote:"Quote 1", source:"Source 1", citation:"Citation 1", year:"Year 1"},
{quote:"Quote 2", source:"Source 2", citation:"Citation 2", year:"Year 2"},
{quote:"Quote 3", source:"Source 3", citation:"Citation 3", year:"Year 3"},
{quote:"Quote 4", source:"Source 4", citation:"Citation 4", year:"Year 4"},
{quote:"Quote 5", source:"Source 5", citation:"Citation 5", year:"Year 5"}

];

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {	//Function to return a random object within the array

	var temp =  Math.floor(Math.random()*quotes.length);
	return quotes[temp];

}

/***
 * `printQuote` function
***/

function printQuote () {					//Build HTML string from quotes array

	var temp = getRandomQuote();
	
	var html = '<p class = "quote">' + temp.quote + '</p>';
	 
	html += '<p class= "source">' + temp.source + '';

	if (temp.citation != 0) {

		html += '<span class="citation">' + temp.citation + '</span>';
	}

	if (temp.year != 0) {
		html += '<span class="year">' + temp.year + '</span>';
	}

	html += '</p>';

	return html; 

}	

console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);