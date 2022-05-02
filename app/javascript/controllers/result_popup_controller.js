import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="result-popup"
export default class extends Controller {
  static targets = ["link"]

  initialize() {
    if (this.hasLinkTarget) {
      this.linkTarget.hidden = true
    }
  }

  async update() {
    console.log("DISPLAY RESULTS (UPDATE)")
    if (this.hasLinkTarget) {
      this.linkTarget.click()
    }

    if (this.frameElement) {
      await this.frameElement.loaded
    }
  }

  // Private

  get frameElement() {
    const id = this.hasLinkTarget &&
        this.linkTarget.getAttribute("data-turbo-frame")

    return id && document.getElementById(id)
  }
}
