const menu = document.querySelector(".menu");
const menuNavegacion = document.querySelector(".menuNavegacion");

menu.addEventListener("click",()=>{
    menuNavegacion.classList.toggle("spread");
});

window.addEventListener("click",e=>{
    if(menuNavegacion.classList.contains('spread') && e.target != menuNavegacion && e.target != menu){
        

        menuNavegacion.classList.toggle("spread");
    }
}
)