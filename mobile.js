const ambuger = document.querySelector(".ambuger");
const mobileMenu = document.querySelector(".mobile-menu");

ambuger.addEventListener("click", () => {
    ambuger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
})

document.querySelectorAll(".mobile-list").forEach(n => n. addEventListener("click", () =>{
    ambuger.classList.remove("active");
    mobileMenu.classList.remove("active");

    
}))