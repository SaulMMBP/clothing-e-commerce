/* Función que abre el menu lateral */
function openNav() {
    // Agregamos la clase active-nav-bar al elemento con id nav-bar
    document.getElementById("nav-bar").classList.add('active-nav-bar');
}

/* Función que cierra el menu lateral */
function closeNav() {
    // Removemos la clase active-nav-bar al elemento con id nav-bar
    document.getElementById("nav-bar").classList.remove('active-nav-bar');
}