document.querySelectorAll('.scroll-quyen_loi').forEach(item => {
  item.addEventListener('click', event => {
    document.getElementById('quyen_loi').scrollIntoView({
      behavior: 'smooth'
    });
  })
});

document.querySelectorAll('.scroll-chuong_trinh_hoc').forEach(item => {
  item.addEventListener('click', event => {
    document.getElementById('chuong_trinh_hoc').scrollIntoView({
      behavior: 'smooth'
    });
  })
});

document.querySelectorAll('.scroll-la_ai').forEach(item => {
  item.addEventListener('click', event => {
    document.getElementById('la_ai').scrollIntoView({
      behavior: 'smooth'
    });
  })
});