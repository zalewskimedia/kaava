let circle = document.querySelector(".circle");
const onMouseMove = (e) => {
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
};
document.addEventListener("mousemove", onMouseMove);

const logoOverlay = document.querySelector(".logo-overlay");
const dots = document.querySelectorAll(".dot-wrapper");
// const links = document.querySelectorAll(".menu-item");

dots.forEach((dot) => {
    dot.addEventListener("mouseover", (e) => {
        logoOverlay.classList.add("hidden");
        if (e.target.classList == "dot-wrapper") {
            setTimeout(() => {
                dot.classList.add("show");
            }, 600);
        }
    });
    dot.addEventListener("mouseleave", () => {
        logoOverlay.classList.remove("hidden");
        dot.classList.remove("show");
    });
});
