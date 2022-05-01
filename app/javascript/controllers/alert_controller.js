import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["alert"]

    dismissAlert() {
        this.alertTarget.remove()
    }
}
