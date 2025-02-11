import { DataAttributes } from "../constants.js";
declare var Swiper: any;

export class UiController {
  private header: HTMLElement | null;
  private navBarElement: HTMLElement | null;
  private hamburgerBtnElement: HTMLElement | null;
  private btnIconElement: HTMLElement | null;
  private navLinkElements: NodeListOf<Element> | null;
  private scrollBtnElement: HTMLElement | null;
  private swiper: any;

  constructor() {
    this.header = document.querySelector(DataAttributes.Header);
    this.navBarElement = document.querySelector(DataAttributes.NavBar);
    this.hamburgerBtnElement = document.querySelector(
      DataAttributes.MenuBtnContainer
    );
    this.btnIconElement = document.querySelector(DataAttributes.MenuBtn);
    this.navLinkElements = document.querySelectorAll(DataAttributes.NavLink);
    this.scrollBtnElement = document.querySelector(DataAttributes.ScrollBtn);
    this.init();
  }

  private init() {
    this.setActiveNavLink();
    this.validateElements();
    this.addEventListeners();
    this.initiazeSwipper();

    this.aboutSectionAnimation();
    this.popularSectionAnimation();
    this.reviewSectionAnimation();
  }

  private aboutSectionAnimation() {
    const revealItems = document.querySelectorAll(
      DataAttributes.AboutSectionItemToAnimate
    );
    const redFlower = document.querySelector(
      DataAttributes.AboutSectionRedFlowerDeco
    );
    const aboutSectionHeader = document.querySelector(
      DataAttributes.AboutSectionHeader
    );

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            entry.target.classList.add("reveal-item");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const redFlowerObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            entry.target.classList.add("red-flower-animation");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sectionHeaderObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            entry.target.classList.add("reveal-item");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );

    revealItems.forEach((item) => {
      observer.observe(item);
    });
    if (redFlower) {
      redFlowerObserver.observe(redFlower);
    }
    if (aboutSectionHeader) {
      sectionHeaderObserver.observe(aboutSectionHeader);
    }
  }

  private popularSectionAnimation() {
    const popularItems = document.querySelectorAll(
      ".popular_card"
    ) as NodeListOf<HTMLElement>;
    const popularSectionHeader = document.querySelector(
      DataAttributes.PopularSectionHeader
    );

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            entry.target.classList.add("pop-up-popular-cards");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionHeaderObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            entry.target.classList.add("reveal-item");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );

    popularItems.forEach((item, index) => {
      item.style.animationDelay = `${(index + 1) * 0.1}s`;
      observer.observe(item);
    });

    if (popularSectionHeader) {
      sectionHeaderObserver.observe(popularSectionHeader);
    }
  }

  private reviewSectionAnimation() {
    const reviewSection = document.querySelector(DataAttributes.ReviewSection);
    const reviewSectionRedFlowerDeco: HTMLDivElement | null =
      document.querySelector(DataAttributes.ReviewSectionRedFlowerDeco);

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            entry.target.classList.add("fade-down-review-section");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const redFlowerObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            entry.target.classList.add("red-flower-animation-from-left");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (reviewSection) {
      observer.observe(reviewSection);
    }
    if (reviewSectionRedFlowerDeco) {
      reviewSectionRedFlowerDeco.style.animationDelay = `${0.8}s`;
      redFlowerObserver.observe(reviewSectionRedFlowerDeco);
    }
  }

  private initiazeSwipper() {
    this.swiper = new Swiper(".swiper", {
      speed: 400,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 15,
      breakpoints: {
        540: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
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

    window.addEventListener("scroll", () => this.handleScrollLimitUp());
    window.addEventListener("scroll", () => this.handleHeadBarVisibility());
    window.addEventListener("scroll", () => this.setActiveNavLink());
  }

  private setActiveNavLink() {
    const sections = document.querySelectorAll("section");

    let current: string | null;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    (this.navLinkElements as NodeListOf<HTMLAnchorElement>)?.forEach(
      (navLink) => {
        navLink.classList.remove("active-link");
        if (!current) {
          return;
        }
        if (navLink?.href.includes(current)) {
          navLink.classList.add("active-link");
        }
      }
    );
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

  private handleScrollLimitUp() {
    if (window.scrollY > 300) {
      this.showScrollBtn();
    } else {
      this.hideScrollBtn();
    }
  }

  private handleHeadBarVisibility() {
    if (window.scrollY >= 50) {
      this.highlightHeader();
    } else {
      this.hideHeader();
    }
  }

  private highlightHeader() {
    this.header?.classList.add(...["border-b", "border-secondary-100"]);
  }

  private hideHeader() {
    this.header?.classList.remove(...["border-b", "border-secondary-100"]);
  }

  private showScrollBtn() {
    this.scrollBtnElement?.classList.remove("-bottom-1/2");
    this.scrollBtnElement?.classList.add("bottom-4");
  }

  private hideScrollBtn() {
    this.scrollBtnElement?.classList.remove("bottom-4");
    this.scrollBtnElement?.classList.add("-bottom-1/2");
  }
}
