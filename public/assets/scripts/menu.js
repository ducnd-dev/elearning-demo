
document.querySelectorAll('.scroll-quyen_loi').forEach(item => {
  item.addEventListener('click', event => {
    // get current url 
    const currentPath = window.location.pathname;
    if (!['/', '/en'].includes(currentPath)) {
      window.open(window.location.origin + '/#quyen_loi', '_self');
      return;
    }
    document.getElementById('quyen_loi').scrollIntoView({
      behavior: 'smooth'
    });
  })
});

document.querySelectorAll('.scroll-chuong_trinh_hoc').forEach(item => {
  item.addEventListener('click', event => {
    const currentPath = window.location.pathname;
    if (!['/', '/en'].includes(currentPath)) {
      window.open(window.location.origin + '/#chuong_trinh_hoc', '_self');
      return;
    }
    document.getElementById('chuong_trinh_hoc').scrollIntoView({
      behavior: 'smooth'
    });
  })
});

document.querySelectorAll('.scroll-la_ai').forEach(item => {
  item.addEventListener('click', event => {
    const currentPath = window.location.pathname;
    if (!['/', '/en'].includes(currentPath)) {
      window.open(window.location.origin + '/#la_ai', '_self');
      return;
    }
    document.getElementById('la_ai').scrollIntoView({
      behavior: 'smooth'
    });
  })
});