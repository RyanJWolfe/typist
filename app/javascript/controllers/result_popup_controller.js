import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="result-popup"
export default class extends Controller {
  static targets = ["link"]

  initialize() {
    if (this.hasLinkTarget) {
      this.linkTarget.hidden = true
    }
  }

  async update(event) {
    if (this.hasLinkTarget) {
      this.linkTarget.click()
    }

    if (this.frameElement) {
      await this.frameElement.loaded
    }

    document.getElementById("accuracy").innerText = event.detail.accuracy
    document.getElementById("wpm").innerText = event.detail.wpm
    document.getElementById("time-elapsed").innerText = event.detail.timeElapsed
  }

  // Private

  get frameElement() {
    const id = this.hasLinkTarget &&
        this.linkTarget.getAttribute("data-turbo-frame")

    return id && document.getElementById(id)
  }
}
