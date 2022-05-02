import { Controller } from "@hotwired/stimulus"
import { get } from "@rails/request.js"


// Connects to data-controller="type"
export default class extends Controller {
  connect() {
    this.gameStarted = false
    this.gameOver = false
    this.errors = 0
    this.convertTextToSpans()
  }

  convertTextToSpans() {
    const div = document.getElementById(`game-text`); // div from HTML
    const text = div.innerText.split(``); // every character of your text stored in array
    div.innerHTML = ''

    text.forEach((char, index) => {

      const node = document.createElement(`span`); // create new span element
      const textnode = document.createTextNode(char);  // create character as text node for span element

      node.appendChild(textnode); // add text to span

      // if you want only to style characters only in the word `GRID`
      // if(index >= text.length - `GRID`.length){
      //
      //   // style the characters however you want to
      //   node.style.color = index % 2 === 0 ? `red` : `black`; // change color
      //   node.style.fontWeight = index % 2 !== 0 ? 900 : 1; // change font weight
      // }
      div.appendChild(node); // add span (character) to the div element in HTML
    });
  }

  inputChanged(e) {
    console.log(e)
    if (e.target.value != null && this.gameStarted === false) {
      this.gameStarted = true
    }
    if (this.gameStarted === true) {
      let gameOver = this.handleInputChange(e.target.value)

      if (gameOver === true) {
        e.target.disabled = true
        this.displayResults()
      }
    }
  }

  handleInputChange(val) {
    const spans = document.getElementById(`game-text`).getElementsByTagName("span")
    const length = Math.max(val.length, spans.length)
    this.errors = 0
    for (let i = 0; i < length; i++) {
      if (i < val.length) {
        if (val[i] === spans[i].innerHTML) {
          spans[i].style.color = "white"
        } else {
          spans[i].style.color = "red"
          spans[i].style.textDecoration = "underline"
          this.errors++
        }
      }
      else if (i < spans.length) {
        spans[i].style.color = ''
        spans[i].style.textDecoration = ''
      }
    }

    // Game is over when input length matches the game text length
    return val.length === spans.length;
  }

  displayResults() {
    const event = new CustomEvent("display-results", {
      "detail": {
        "wpm": "80",
        "accuracy": `${this.accuracy}%`
      }
    })
    window.dispatchEvent(event)
  }

  get accuracy() {
    let totalChars = document.getElementById(`game-text`).getElementsByTagName("span").length
    console.log(`total chars: ${totalChars}, errors: ${this.errors}`)
    return ((1 - (this.errors / totalChars)) * 100).toFixed(2)
  }
}
