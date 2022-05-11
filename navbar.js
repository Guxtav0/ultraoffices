class navBar{
    constructor(menumobile, navList, navLinks){
        this.mobilemenu = document.querySelector(menumobile);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.active ="active";
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.navList.classList.toggle(this.active);
    }
    addClick(){
        this.mobilemenu.addEventListener("click", this.handleClick);
        this.navLinks.addEventListener("click", this.handleClick);
    }
    init(){
        if(this.mobilemenu){
            this.addClick();
        }else if(this.navLinks){
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