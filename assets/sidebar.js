if (!window.__sidebar_initialized__) {
  window.__sidebar_initialized__ = true;

  (() => {
    const sidebar = document.querySelector('.sidebar');
    const contentUser = document.getElementById('content-user');
    const contentCart = document.getElementById('content-cart');

    function showSidebar(id) {
      sidebar.classList.add('visible');
      contentCart.classList.add('hidden');
      contentUser.classList.add('hidden');
      if (id === 'user') contentUser.classList.remove('hidden');
      if (id === 'cart') contentCart.classList.remove('hidden');
    }

    const btnUser = document.getElementById('btn-user');
    const btnCart = document.getElementById('btn-cart');
    btnUser?.addEventListener('click', () => showSidebar('user'));
    btnCart?.addEventListener('click', () => showSidebar('cart'));

    const btnCloseSidebar = document.querySelector('.btn-close-sidebar');
    btnCloseSidebar?.addEventListener('click', () => {
      sidebar.classList.remove('visible');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        sidebar.classList.remove('visible');
      }
    });
  })();
}
