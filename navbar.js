class navBar{
    constructor(menumobile, navList, navLinks){
        this.mobilemenu = document.querySelector(menumobile);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.active ="active";
        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks(){
        this.navLinks.forEach((link) =>{
            link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease fowards 0.3s`);
        });
    }
    handleClick(){
        this.navList.classList.toggle(this.active);
        this.animateLinks();
    }
    addClick(){
        this.mobilemenu.addEventListener("click", this.handleClick);
    }
    init(){
        if(this.mobilemenu){
            this.addClick();
        }
        return this;
    }

}

const mobileNavBar = new navBar(
    ".menumobile",
    ".nav-list",
    ".nav-list li",
);
mobileNavBar.init();