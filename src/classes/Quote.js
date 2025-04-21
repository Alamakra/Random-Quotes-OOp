class Quote {
  constructor(id, text, author, isFavorite) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.isFavorite = isFavorite;
  }

  info() {
    return `Quote has id ${this.id} and author is ${this.author}`;
  }

  formatAuthor() {
    return `@${this.author}`;
  }
}

export default Quote;
