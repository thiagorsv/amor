

document.addEventListener("DOMContentLoaded", () => {

    console.log("JS cargado correctamente");

    // ---- LISTA DE IMAGENES ----
    const images = [
        "/static/photos/Juntos1.jpeg",
        "/static/photos/Juntos2.jpeg",
        "/static/photos/Juntos3.jpeg"
    ];

    let current = 0;

    const img = document.querySelector(".gallery-img");

    if (!img) {
        console.error("No se encontró .gallery-img");
        return;
    }

    // ---- CAMBIO DE IMAGEN CON ZOOM ----
    function changeImage(newSrc) {
        img.classList.add("zoom-enter");

        setTimeout(() => {
            img.src = newSrc;

            img.classList.remove("zoom-enter");
            img.classList.add("zoom-active");

            setTimeout(() => {
                img.classList.remove("zoom-active");
            }, 800);

        }, 50);
    }

    function nextImage() {
        current = (current + 1) % images.length;
        changeImage(images[current]);
    }

    function prevImage() {
        current = (current - 1 + images.length) % images.length;
        changeImage(images[current]);
    }

    // ---- SWIPE ----
    let startX = 0;
    let endX = 0;

    img.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    img.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    // soporte mouse (PC)
    img.addEventListener("mousedown", (e) => {
        startX = e.clientX;
    });

    img.addEventListener("mouseup", (e) => {
        endX = e.clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) < threshold) return;

        if (diff > 0) {
            console.log("Swipe izquierda");
            nextImage();
        } else {
            console.log("Swipe derecha");
            prevImage();
        }
    }

});



/*
// lista de fotos
const images = [
    "/static/photos/Juntos1.jpeg",
    "/static/photos/Juntos2.jpeg",
    "/static/photos/Juntos3.jpeg"
];

let current = 0;


// animación zoom
function changeImage(newSrc) {
    const img = document.querySelector(".gallery-img");

    img.classList.add("zoom-enter");

    setTimeout(() => {
        img.src = newSrc;

        img.classList.remove("zoom-enter");
        img.classList.add("zoom-active");

        setTimeout(() => {
            img.classList.remove("zoom-active");
        }, 800);

    }, 50);
}

// cambiar a siguiente imagen
function nextImage() {
    current = (current + 1) % images.length;
    changeImage(images[current]);
}


function prevImage() {
    current = (current - 1 + images.length) % images.length;
    changeImage(images[current]);
}

*/


