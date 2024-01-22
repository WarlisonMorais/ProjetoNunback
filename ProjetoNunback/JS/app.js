//Scroll header 
function scrollHeader(){

    const nav = document.getElementById('header')

    if(this.scrollY >= 50){
        nav.classList.add('active-header')
    }else{
        nav.classList.remove('active-header')
    }
}

window.addEventListener('scroll', scrollHeader)


//Dropdown Menu 
const dropdowMenu1 = document.getElementById('dropdown-item-1');
const dropdowMenu2 = document.getElementById('dropdown-item-2');
const dropdowMenu3 = document.getElementById('dropdown-item-3');

// Menu Item 
const menuItem1 = document.getElementById('menu-item-1');
const menuItem2 = document.getElementById('menu-item-2');
const menuItem3 = document.getElementById('menu-item-3');


//dropMenu nos itens 
function showDropdow1(e){
    e.preventDefault();
    dropdowMenu1.classList.toggle('active-dropdown-menu');
    dropdowMenu2.classList.remove('active-dropdown-menu');
    dropdowMenu3.classList.remove('active-dropdown-menu');
}

function showDropdow2(e){
    e.preventDefault();
    dropdowMenu1.classList.remove('active-dropdown-menu');
    dropdowMenu2.classList.toggle('active-dropdown-menu');
    dropdowMenu3.classList.remove('active-dropdown-menu');
}

function showDropdow3(e){
    e.preventDefault();
    dropdowMenu1.classList.remove('active-dropdown-menu');
    dropdowMenu2.classList.remove('active-dropdown-menu');
    dropdowMenu3.classList.toggle('active-dropdown-menu');
}

menuItem1.addEventListener('click', showDropdow1); 
menuItem2.addEventListener('click', showDropdow2);
menuItem3.addEventListener('click', showDropdow3);

dropdowMenu1.addEventListener('mouseleave', removeDropdown);
dropdowMenu2.addEventListener('mouseleave', removeDropdown);
dropdowMenu3.addEventListener('mouseleave', removeDropdown);

function removeDropdown(){
    dropdowMenu1.classList.remove('active-dropdown-menu');
    dropdowMenu2.classList.remove('active-dropdown-menu');
    dropdowMenu3.classList.remove('active-dropdown-menu');
}


//Menu Mobile 



const showMenu = (toggleId, navId) => {

    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){

        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }

}

showMenu('bx','menu-mobile')