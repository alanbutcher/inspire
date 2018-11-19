import QuoteService from "./quote-service.js";

let qs = new QuoteService


function drawQuote(quoteData) {
	// console.log('What is the quote:', quoteData)			
	let quote = quoteData.quote;
	let template = `
	<div>
	<p class="quote-body">${quote.body}</p>
	<br> <p class="quote-author"><em>${quote.author}</em><ur></p>
	</div>
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
