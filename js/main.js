// headerスクロール変化
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("Header-scrolled", window.scrollY > 200);
    //window.scrollY
});
//headerレスポンシブ
const header_menu_btn = document.getElementById("header-nav-toggle");
const header_inn = document.getElementById("header-nav");
const header_ul = document.getElementById("menu-main");
header_menu_btn.addEventListener("click", () => {
    header_menu_btn.classList.toggle("h-r-activer");
    // header_inn.style.display = "block";
    header_inn.classList.toggle("h-r-active");
    header_ul.classList.toggle("h-ul-active");
});
//sections スクロールフェードイン
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const sections = document.querySelectorAll('.sections-rest');
    
    sections.forEach( (section) => {
        const distanceToBox = section.offsetTop;
        const distanceToBox_apear = distanceToBox + 100;
        if(scroll + windowHeight > distanceToBox_apear) {
            section.classList.add('sections-scrolled');
        }
    });
});