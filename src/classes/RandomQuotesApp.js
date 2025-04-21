import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('generate-btn');
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAuthorElement = document.getElementById('quote-author');
    this.randomQuoteAPIBtn = document.getElementById('generate-api-btn');
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    const { text, author } = this.currentQuote;

    this.quoteTextElement.textContent = `"${text}"`;
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  displayCurrentAPIQuote() {
    console.log('QUOTE: ', this.currentQuote);
    const { text } = this.currentQuote;

    this.quoteTextElement.textContent = `"${text}"`;
    this.quoteAuthorElement.textContent = 'GIGGA NIGGA';
  }

  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.currentQuote = randomQuote;
    this.displayCurrentQuote();
  }
  getRandomQuoteViaAPI() {
    RandomQuote.getRandomQuoteViaAPI().then((quote) => {
      if (quote instanceof Quote) {
        this.currentQuote = quote;
        this.displayCurrentAPIQuote();
      }
    });
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
    this.randomQuoteAPIBtn.addEventListener('click', () =>
      this.getRandomQuoteViaAPI()
    );
  }
}

export default RandomQuotesApp;
