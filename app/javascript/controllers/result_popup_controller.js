import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="result-popup"
export default class extends Controller {
  static targets = ["link"]

  initialize() {
    if (this.hasLinkTarget) {
      this.linkTarget.hidden = true
    }
  }

  async update(e) {
    if (this.hasLinkTarget) {
      this.linkTarget.click()
    }

    if (this.frameElement) {
      await this.frameElement.loaded
    }

    document.getElementById("accuracy").innerText = e.detail.accuracy
    document.getElementById("wpm").innerText = e.detail.wpm
  }

  // Private

  get frameElement() {
    const id = this.hasLinkTarget &&
        this.linkTarget.getAttribute("data-turbo-frame")

    return id && document.getElementById(id)
  }
}
