const sidebar = document.querySelector('.sidebar'); /*Full screen used to show part of the cart or the user */

//show snippet sidebar with information of user or cart
function showSidebar(){
    sidebar.classList.add('visible');
}

const btnUser = document.getElementById('btn-user');
const btnCart = document.getElementById('btn-cart');

btnUser.addEventListener('click', ()=> showSidebar())
btnCart.addEventListener('click', ()=> showSidebar())

const btnCloseSidebar = document.querySelector('.btn-close-sidebar').addEventListener('click', ()=>{
    sidebar.classList.remove('visible');
})
