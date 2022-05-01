import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="type"
export default class extends Controller {
  connect() {
    this.gameStarted = false
  }

  inputChanged(e) {
    console.log(e.target.value)
    console.log(this.gameStarted)
    if (e.target.value != null && this.gameStarted === false) {
      this.gameStarted = true
    }
  }

}
