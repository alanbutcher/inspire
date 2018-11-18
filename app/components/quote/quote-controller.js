import QuoteService from "./quote-service.js";

let qs = new QuoteService


function drawQuote(quoteData) {
	// console.log('What is the quote:', quoteData)			
	let quote = quoteData.quote;
	let template = `
	<h3>${quote.body}</h3>
	<h5><em>${quote.author}</em></h5>
	
	`
	document.getElementById('quote').innerHTML = template;
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(drawQuote)
	}
}
