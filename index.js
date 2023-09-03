const box = document.getElementById("light-box");
const body = document.querySelector("body");
const layer = document.createElement("div");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const amount = document.getElementById("amount");
const addCart = document.querySelector(".add-cart");
const cart = document.querySelector(".cart");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");


layer.classList.add("layer");

box.addEventListener('click', () => {
    if (window.innerWidth <= 375) return;
    
    body.append(createLightBox());
});

function createLightBox() {
    const cover = document.createElement("div");
    const x = document.createElement("button");
    const forward = document.createElement("button");
    const backward = document.createElement("button");
    const lightbox = document.createElement("div");
    const mainImg = document.createElement("div");
    const smImg1 = document.createElement("div");
    const smImg2 = document.createElement("div");
    const smImg3 = document.createElement("div");
    const smImg4 = document.createElement("div");
    const delImg = document.createElement("img");
    const forImg = document.createElement("img");
    const backImg = document.createElement("img");

    cover.classList.add("cover");
    lightbox.classList.add("light-box");
    mainImg.classList.add("big-pic");
    mainImg.classList.add("big-pic-1");
    smImg1.classList.add("sm-pic-1");
    smImg2.classList.add("sm-pic-2");
    smImg3.classList.add("sm-pic-3");
    smImg4.classList.add("sm-pic-4");
    delImg.setAttribute("src", "images/icon-close.svg");
    forImg.setAttribute("src", "images/icon-next.svg");
    backImg.setAttribute("src", "images/icon-previous.svg");
    x.classList.add("del");
    forward.classList.add("forward");
    backward.classList.add("backward");

    forward.append(forImg);
    backward.append(backImg);
    
    
    mainImg.append(backward);
    mainImg.append(forward);
    

    x.append(delImg);
    smImg1.append(layer);
    lightbox.append(mainImg);
    lightbox.append(smImg1);
    lightbox.append(smImg2);
    lightbox.append(smImg3);
    lightbox.append(smImg4);


    cover.append(x);
    cover.append(lightbox);

    x.addEventListener('click', () => cover.remove());
    smImg1.addEventListener('click', () => {
        mainImg.className = "big-pic big-pic-1";

        smImg1.append(layer);
    });

    smImg2.addEventListener('click', () => {
        mainImg.className = "big-pic big-pic-2";

        smImg2.append(layer);
    });

    smImg3.addEventListener('click', () => {
        mainImg.className = "big-pic big-pic-3";

        smImg3.append(layer);
    });

    smImg4.addEventListener('click', () => {
        mainImg.className = "big-pic big-pic-4";

        smImg4.append(layer);
    });


    forward.addEventListener('click', () => {
        let num = Number(mainImg.className[mainImg.className.length - 1]);

        if (num + 1 > 4) return;
        
        mainImg.className = `big-pic big-pic-${num + 1}`;
        switch(num + 1) {
            case 1:
                smImg1.append(layer);
                break;
            case 2:
                smImg2.append(layer);
                break;
            case 3:
                smImg3.append(layer);
                break;
            case 4:
                smImg4.append(layer);
                break;
        }
    });

    backward.addEventListener('click', () => {
        let num = Number(mainImg.className[mainImg.className.length - 1]);

        if (num - 1 < 1) return;
        
        mainImg.className = `big-pic big-pic-${num - 1}`;
        switch(num - 1) {
            case 1:
                smImg1.append(layer);
                break;
            case 2:
                smImg2.append(layer);
                break;
            case 3:
                smImg3.append(layer);
                break;
            case 4:
                smImg4.append(layer);
                break;
        }
    });

    return cover;
}


inc.addEventListener('click', () => {
    let num = Number(amount.innerText);

    amount.innerText = num + 1;
});

dec.addEventListener('click', () => {
    let num = Number(amount.innerText);

    if (num - 1 < 0) return;
    amount.innerText = num - 1;
});

add.addEventListener('click', () => {
    let Main = add.parentElement;
    let num = Number(Main.className[Main.className.length - 1]);

    if (num + 1 > 4) return;

    Main.className = `big-pic big-pic-${num + 1}`;
});

sub.addEventListener('click', () => {
    let Main = sub.parentElement;
    let num = Number(Main.className[Main.className.length - 1]);

    if (num - 1 < 1) return;

    Main.className = `big-pic big-pic-${num - 1}`;
});