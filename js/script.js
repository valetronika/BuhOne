const about_us_container_with_blocks = document.querySelector(
    ".about_us_container_with_blocks"
);

const about = [
    {
        number: 90,
        info: "Завершено крупных сделок",
        link: "#",
    },
    {
        number: 90,
        info: "Завершено крупных сделок",
        link: "#",
    },
    {
        number: 90,
        info: "Завершено крупных сделок",
        link: "#",
    },
    {
        number: 90,
        info: "Завершено крупных сделок",
        link: "#",
    },
];
about.forEach(({ number, info, link }) => {
    const aboutCont = document.createElement("div");

    const numberEl = document.createElement("p");
    const infoEl = document.createElement("p");
    const linkEl = document.createElement("a");

    numberEl.innerText = number;
    infoEl.innerText = info;
    linkEl.href = link;
    linkEl.innerText = "Все кейсы";

    aboutCont.classList.add("aboutCont");
    numberEl.classList.add("numberEl");
    infoEl.classList.add("infoEl");
    aboutCont.append(numberEl, infoEl, linkEl);
    about_us_container_with_blocks.append(aboutCont);
});
// const inputs= document.querySelector('.form_contact');
// inputs.addEventListener('submit', (event)=>{
// event.preventDefault();
// event.target.reset();
// inputs.value='';
// });

// ! burger
const menu_icon= document.querySelector('.menu_icon');
const burger_menu= document.querySelector('ul');
menu_icon.addEventListener('click', ()=>{
    burger_menu.classList.toggle('active');
})