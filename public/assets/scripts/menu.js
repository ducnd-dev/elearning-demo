
document.querySelectorAll('.scroll-quyen_loi').forEach(item => {
  item.addEventListener('click', event => {
    // get current url 
    let currentUrl = window.location.href.split('?')[0];
    if (!['/', '/en'].includes(currentUrl)) {
      window.open(currentUrl + '?id=quyen_loi', '_self');
      return;
    }
    document.getElementById('quyen_loi').scrollIntoView({
      behavior: 'smooth'
    });
  })
});

document.querySelectorAll('.scroll-chuong_trinh_hoc').forEach(item => {
  item.addEventListener('click', event => {
    const currentUrl = window.location.href.split('?')[0];
    if (!['/', '/en'].includes(currentUrl)) {
      window.open(currentUrl + '?id=chuong_trinh_hoc', '_self');
      return;
    }
    document.getElementById('chuong_trinh_hoc').scrollIntoView({
      behavior: 'smooth'
    });
  })
});

document.querySelectorAll('.scroll-la_ai').forEach(item => {
  item.addEventListener('click', event => {
    const currentUrl = window.location.href.split('?')[0];
    if (!['/', '/en'].includes(currentUrl)) {
      window.open(currentUrl + '?id=la_ai', '_self');
      return;
    }
    document.getElementById('la_ai').scrollIntoView({
      behavior: 'smooth'
    });
  })
});
