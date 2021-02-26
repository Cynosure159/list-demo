function openCard(index) {
    let className = document.getElementById("card-" + index).className;
    console.log(className);
    if (className.indexOf("card-open") < 0) {
        console.log("yes")
        let card = document.getElementById("card-" + index);
        let image = document.getElementById("card-img-" + index);
        let block = document.getElementById("card-block-" + index);
        let whiteblock = document.getElementById("card-whiteblock-" + index);
        let close = document.getElementById("card-close-" + index);
        let title2 = document.getElementById("card-title2-" + index);
        let subtitle2 = document.getElementById("card-subtitle2-" + index);
        let smblock = document.getElementById("card-smblock-" + index);

        card.classList.add("card-open");
        // block.className += " card-block-open";
        // image.className += " card-img-open";
        // document.getElementById("card-title-" + index).className += " card-title-open";
        // document.getElementById("card-subtitle-" + index).className += " card-subtitle-open";

        let browserH = document.documentElement.clientHeight;
        let browserW = document.documentElement.clientWidth;
        let top = document.documentElement.scrollTop - card.offsetTop;
        let left = card.offsetLeft;
        let right = browserW - left - card.offsetWidth;

        let scale, scaleX, scaleY;

        card.style.cursor = "default";

        scale = browserH * 0.8 / image.clientHeight;
        image.style.top = (top + browserH * 0.1) + "px";
        image.style.transform = "scale(" + scale + ", " + scale + ")";
        image.style.zIndex = "50";
        image.style.right = "-" + (right - browserH * 0.1) + "px";


        scaleY = browserH * 0.6 / block.clientHeight;
        scaleX = browserW / block.clientWidth;
        block.style.top = (top + browserH * 0.4) + "px";
        block.style.transform = "scale(" + scaleX + ", " + scaleY + ")";
        block.style.left = "-" + left + "px";
        block.style.zIndex = "40";

        scaleY = browserH * 0.41 / whiteblock.clientHeight;
        scaleX = browserW / whiteblock.clientWidth;
        whiteblock.style.top = top + "px";
        whiteblock.style.transform = "scale(" + scaleX + ", " + scaleY + ")";
        whiteblock.style.left = "-" + left + "px";
        whiteblock.style.zIndex = "40";

        close.style.display = "block";

        title2.style.display = "block";

        subtitle2.style.display = "block";

        smblock.style.display = "block";

        document.body.style.overflow = "hidden";
    }
}

function closeCard(index) {
    let card = document.getElementById("card-" + index);
    let image = document.getElementById("card-img-" + index);
    let block = document.getElementById("card-block-" + index);
    let whiteblock = document.getElementById("card-whiteblock-" + index);
    let close = document.getElementById("card-close-" + index);
    let title2 = document.getElementById("card-title2-" + index);
    let subtitle2 = document.getElementById("card-subtitle2-" + index);
    let smblock = document.getElementById("card-smblock-" + index);


    card.style.cursor = "pointer";

    image.style.top = "";
    image.style.transform = "";
    image.style.right = "";

    block.style.top = "";
    block.style.transform = "";
    block.style.left = "";

    whiteblock.style.top = "";
    whiteblock.style.transform = "";
    whiteblock.style.left = "";

    close.style.display = "none";
    title2.style.display = "none";
    subtitle2.style.display = "none";
    smblock.style.display = "none";

    setTimeout(() => {
        image.style.zIndex = "";
        block.style.zIndex = "";
        whiteblock.style.zIndex = "";
        card.classList.remove("card-open");
    }, 500);

    document.body.style.overflow = "auto";

}