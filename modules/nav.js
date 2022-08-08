export const onNavItemClick = (event) => {
  const activePage = document.querySelectorAll('.active');

  activePage.forEach((page) => {
    page.className = page.className.replace('active', '');
  });

  event.target.parentElement.className += ' active';
  document.getElementById(event.target.href.split('#')[1]).className += ' active';
};

export const nav = document.getElementById('nav-bar');