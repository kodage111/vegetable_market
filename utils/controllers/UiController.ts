import { DataAttributes } from "../constants.js";

export class UiController {
  private navBarElement: HTMLElement | null;
  private hamburgerBtnElement: HTMLElement | null;
  private btnIconElement: HTMLElement | null;
  private navLinkElements: NodeListOf<Element> | null;

  constructor() {
    this.navBarElement = document.querySelector(DataAttributes.NavBar);
    this.hamburgerBtnElement = document.querySelector(
      DataAttributes.MenuBtnContainer
    );
    this.btnIconElement = document.querySelector(DataAttributes.MenuBtn);
    this.navLinkElements = document.querySelectorAll(DataAttributes.NavLink);
    this.init();
  }

  private init() {
    this.validateElements();
    this.addEventListeners();
  }

  private addEventListeners() {
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        this.navBarElement?.classList.contains("right-0")
      ) {
        this.toggleHamburgerMenu();
      }
    });

    this.hamburgerBtnElement?.addEventListener("click", () =>
      this.toggleHamburgerMenu()
    );

    this.navLinkElements?.forEach((element) => {
      element.addEventListener("click", () => this.toggleHamburgerMenu());
    });
  }

  private validateElements() {
    if (!this.navBarElement) {
      console.log(`Element with selector ${DataAttributes.NavBar} not found`);
    }
    if (!this.hamburgerBtnElement) {
      console.log(`Element with selector ${DataAttributes.MenuBtn} not found`);
    }
  }

  private toggleHamburgerMenu() {
    this.navBarElement?.classList.toggle("right-[-100%]");
    this.navBarElement?.classList.toggle("right-0");
    this.btnIconElement?.classList.toggle("ri-close-large-line");
    this.btnIconElement?.classList.toggle("ri-menu-4-line");
  }
}
