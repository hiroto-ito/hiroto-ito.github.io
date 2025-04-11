// headerスクロール変化
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("Header-scrolled", window.scrollY > 200);
    //window.scrollY
});