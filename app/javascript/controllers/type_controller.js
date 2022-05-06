import {Controller} from "@hotwired/stimulus"
import Timer from "../helpers/timer";

// Connects to data-controller="type"
export default class extends Controller {
  connect() {
    this.gameStarted = false
    this.errors = 0
    this.timer = new Timer()
    this.convertTextToSpans()
    this.spans[0].style.textDecoration = 'underline'
  }

  convertTextToSpans() {
    const div = document.getElementById(`game-text`); // div from HTML
    const text = div.innerText.split(``); // every character of your text stored in array
    div.innerHTML = ''

    text.forEach((char, index) => {
      const node = document.createElement(`span`); // create new span element
      const textnode = document.createTextNode(char);  // create character as text node for span element
      node.appendChild(textnode); // add text to span
      div.appendChild(node); // add span (character) to the div element in HTML
    });
  }

  inputChanged(e) {
    if (e.target.value != null && this.gameStarted === false) {
      this.errors = 0
      this.gameStarted = true
      this.timer.start()
      setInterval(() => {
        document.getElementById('timer').innerText = (this.timer.getTime()/1000).toString();
      }, 100)
    }
    if (this.gameStarted === true) {
      let gameOver = this.handleInputChange(e.target.value, e.inputType)

      if (gameOver === true) {
        this.timer.stop()
        e.target.disabled = true
        this.displayResults()
      }
    }
  }

  handleInputChange(val, actionType) {
    let spans = this.spans
    const length = Math.max(val.length, spans.length)
    let index = (val.length === 0) ? 0 : val.length - 1

    if (index < spans.length) {
      if (val[index] !== spans[index].innerHTML && actionType !== "deleteContentBackward") {
        this.errors++
      }
    }

    for (let i = 0; i < length; i++) {
      if (i < val.length) {
        if (val[i] === spans[i].innerHTML) {
          spans[i].style.color = "white"
          spans[i].style.textDecoration = ''
        } else {
          spans[i].style.color = "red"
          spans[i].style.textDecoration = "underline"
        }
      }
      else if (i < spans.length) {
        spans[i].style.color = ''
        spans[i].style.textDecoration = ''
      }
    }

    let cursor_index = (index === 0) ? 0 : index + 1
    if (cursor_index < spans.length - 1)
      spans[cursor_index].style.textDecoration = 'underline'

    // Game is over when input length matches the game text length
    return val.length === spans.length;
  }

  displayResults() {
    const event = new CustomEvent("display-results", {
      "detail": {
        "wpm": this.wpm,
        "accuracy": `${this.accuracy}%`
      }
    })
    window.dispatchEvent(event)
  }

  get accuracy() {
    console.log(this.errors)
    console.log(this.gameCharLength)
    return ((1 - (this.errors / this.gameCharLength)) * 100).toFixed(2)
  }

  get wpm() {
    return Math.round((this.gameCharLength / 5) / (this.millisToMinutes(this.timer.getTime())))
  }

  get gameCharLength() {
    return document.getElementById(`game-text`).getElementsByTagName("span").length
  }

  get spans() {
    return document.getElementById(`game-text`).getElementsByTagName("span")
  }

  millisToMinutes(ms) {
    return (ms / 60000)
  }
}
