class MobileNavbar {
    constructor(){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
    }
    addClickEvent(){
        console.log(this);
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const MobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
MobileNavbar.init();