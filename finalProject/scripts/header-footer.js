function toggleMenu(){
    document.querySelector("#navbar").classList.toggle('menu-active')
    document.querySelector("#menu-close").classList.toggle('menu-active')
    document.querySelector("#menu-open").classList.toggle('menu-active')

}

//document.querySelector("#hamburger-menu").onclick = toggleMenu;

document.querySelector("#hamburger-menu").addEventListener('click', toggleMenu);



//set last modififed in footer

document.querySelector('#lastmodified').textContent = document.lastModified;