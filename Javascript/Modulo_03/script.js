function menuToggle(){
    let menuArea = document.getElementById("menu-area");
    if(menuArea.classList.contains("menu-opened") == true){
        menuArea.classList.remove();
    } else {
        menuArea.classList.add("menu-opened");
    }
}