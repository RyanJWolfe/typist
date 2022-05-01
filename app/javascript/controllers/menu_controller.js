import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["userDropdown", "dropdown"]

  toggleUserMenu(e) {
    e.stopPropagation()
    this.hideMenuDropdown()
    this.userDropdownTarget.classList.toggle('hidden')
  }

  toggleMenuDropdown(e) {
    e.stopPropagation()
    this.hideUserDropdown()
    this.dropdownTarget.classList.toggle('hidden')
  }

  hide() {
    this.hideUserDropdown()

    if (this.hasDropdownTarget)
      this.dropdownTarget.classList.add('hidden')
  }

  hideUserDropdown() {
    if (this.hasUserDropdownTarget)
      this.userDropdownTarget.classList.add('hidden')
  }

  hideMenuDropdown() {
    if (this.hasDropdownTarget)
      this.dropdownTarget.classList.add('hidden')
  }
}
