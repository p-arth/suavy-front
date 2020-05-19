// Details Toggle

const showDetailsServices = () => {
    const details = document.querySelector(".services-more")
    details.classList.toggle("invisible");
    const btn1 = document.querySelector(".arrows-1");
    btn1.classList.toggle("active");
    const btn2 = document.querySelector(".arrows-2");
    btn2.classList.toggle("active");
}

const servicesBtn = document.querySelector(".what-we-do")
servicesBtn.addEventListener('click', showDetailsServices);