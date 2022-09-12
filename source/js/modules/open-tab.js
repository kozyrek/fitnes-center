let tabButtons = document.querySelectorAll('.tabs__button');
let tabs = document.querySelectorAll('.tabs__pane');
let tabName;

const selectTabButton = (evt) => {
  tabButtons.forEach((element) => {
    element.removeAttribute('href');
    element.classList.remove('tabs__button--active');
  });

  let target = evt.target;
  target.classList.add('tabs__button--active');
  tabName = target.getAttribute('data-tab-name');
  selectTabContent(tabName);
};

const selectTabContent = (item) => {
  if (tabs) {
    tabs.forEach((element) => {
      if (element.classList.contains(item)) {
        element.classList.add('tabs__pane--show');
      } else {
        element.classList.remove('tabs__pane--show');
      }
    });
  }
};

const openTab = function () {
  if (tabButtons) {
    tabButtons.forEach((element) => {
      element.addEventListener('click', selectTabButton);

      element.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 13) {
          evt.preventDefault();
          selectTabButton(evt);
        }
      });
    });
  }
};

export {openTab};
