// headerスクロール変化
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("Header-scrolled", window.scrollY > 200);
    //window.scrollY
});
//sections スクロールフェードイン
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const sections = document.querySelectorAll('.sections-rest');
    
    sections.forEach( (section) => {
        const distanceToBox = section.offsetTop;
        // 下記条件が成り立つときだけboxにis-activeクラスを付与する
        console.log(section);
        console.log(scroll);
        console.log(windowHeight);
        console.log(distanceToBox);
        if(scroll + windowHeight > distanceToBox) {
            section.classList.add('sections-scrolled');
        }
    });
});