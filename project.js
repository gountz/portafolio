function desplegable($element){
    $element.parentElement.classList.toggle('fondoProyecto');
    $element.parentElement.getElementsByTagName('a')[0].classList.toggle('acceso-toggle')
    $element.parentElement.getElementsByTagName('i')[0].classList.toggle('bxs-chevron-right-square');
    $element.parentElement.getElementsByTagName('i')[0].classList.toggle('bxs-chevron-down-square');
    
}