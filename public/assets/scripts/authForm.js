const tabItems = document.querySelectorAll('.mega-item-js');
tabItems.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    console.log('login', 'click', 'tab', index);
    handleTransformOldBackgroundTab(index);
    if (index % 2 === 0) {
      handleTab('register-form', 0);
      tabItems?.[0]?.classList.add('active');
      tabItems?.[1]?.classList.remove('active');
      // tabItems[2].classList.add('active')
      // tabItems[3].classList.remove('active')
    } else {
      handleTab('login-form', 1);
      tabItems?.[0]?.classList.remove('active');
      tabItems?.[1]?.classList.add('active');
      // tabItems[2].classList.remove('active')
      // tabItems[3].classList.add('active')
    }

    handlePanel(index);
    addBorder(index);
  });
});

function handleTransformOldBackgroundTab(index) {
  tabItems.forEach((tab, i) => {
    if (i !== index) {
      tab.classList.remove('active');
    }
  });
}

function handleTab(form, index) {
  const forms = document.querySelectorAll('.form-js');
  forms.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function handlePanel(index) {
  const panels = document.querySelectorAll('.panel-js');
  panels.forEach((panel, i) => {
    if (i === index) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
}

function addBorder(index) {
  const border = document.querySelector('.border-js');
  if (border && border.style) {
    if (index % 2 === 0) {
      border.style.transform = 'translateX(0)';
    } else {
      border.style.transform = 'translateX(100%)';
    }
  }
}
