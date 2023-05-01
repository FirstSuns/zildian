class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');
    this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;

    this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
    this.mainDetailsToggle.addEventListener('toggle', this.onToggle.bind(this));
    this.menuLinks = this.mainDetailsToggle.querySelectorAll('.mega-menu__list .list-unstyled .mega-menu__link');
    this.subMenuContnets= this.querySelectorAll('.mega-menu__sub_content .submenu-content');
    this.toggleSubMenu();
  }
  toggleSubMenu() {
    var $this = this;
    this.menuLinks.forEach(menuLink => {
      menuLink.addEventListener('mouseover', function (e) {
        var element = e.target;
        var title = element.dataset.title;
        $this.menuLinks.forEach(menuLink => {
          menuLink.classList.remove('mega-menu__link--active');
        });
        element.classList.add('mega-menu__link--active');

        $this.subMenuContnets.forEach(subMenuContnet => {
          subMenuContnet.classList.remove('active');
          var handle = subMenuContnet.dataset.title;
          if (handle == title) {
            subMenuContnet.classList.add('active');
          }
        });

      });
    });
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    })
  }

  onToggle() {
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach(animation => animation.play());
    } else {
      this.animations.forEach(animation => animation.cancel());
    }
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
  }
}

customElements.define('details-disclosure', DetailsDisclosure);

class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    this.header = document.querySelector('.header-wrapper');
  }

  onToggle() {
    if (!this.header) return;
    this.header.preventHide = this.mainDetailsToggle.open;

    if (document.documentElement.style.getPropertyValue('--header-bottom-position-desktop') !== '') return;
    document.documentElement.style.setProperty('--header-bottom-position-desktop', `${Math.floor(this.header.getBoundingClientRect().bottom)}px`);
  }
}

customElements.define('header-menu', HeaderMenu);
