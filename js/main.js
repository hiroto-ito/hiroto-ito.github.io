const imgsrc = ["img/Gal00.jpg", "img/Gal01.webp", "img/Gal02.webp"];

let countA = -1;
setInterval(() => {
    countA = (countA + 1) % imgsrc.length;
    const nowslide = document.getElementById('slidedImg');
    console.log(nowslide);
    nowslide.setAttribute('src', imgsrc[countA]);
}, 5000);