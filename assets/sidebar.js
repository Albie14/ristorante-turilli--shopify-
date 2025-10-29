const sidebar = document.querySelector('.sidebar'); /*Full screen used to show part of the cart or the user */
const contentUser = document.getElementById('content-user');
const contentCart = document.getElementById('content-cart');

//show snippet sidebar with information of user or cart
function showSidebar(id){
    sidebar.classList.add('visible');

    contentCart.classList.add('hidden');
    contentUser.classList.add('hidden');
    if(id === 'user'){
        contentUser.classList.remove('hidden');
    }

    if(id === 'cart'){
        contentCart.classList.remove('hidden')
    }
    
}
const btnUser = document.getElementById('btn-user');
const btnCart = document.getElementById('btn-cart');

btnUser.addEventListener('click', ()=> showSidebar('user'))
btnCart.addEventListener('click', ()=> showSidebar('cart'))

const btnCloseSidebar = document.querySelector('.btn-close-sidebar').addEventListener('click', ()=>{
    sidebar.classList.remove('visible');
})
document.addEventListener('keydown', (e)=>{
    if(e.key == 'Escape'){
        sidebar.classList.remove('visible');
    }
})




