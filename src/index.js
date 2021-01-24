import menuItemTpl from '../templates/menu-item.hbs';
import menu from './menu.json';
import './styles.css';

const STORAGE_KEY_THEME = 'checked-dark-theme';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuList: document.querySelector('.js-menu'),
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.menuList.innerHTML = menu.map(menuItemTpl).join('');

firstTheme();

refs.checkbox.addEventListener('change', oncheckboxChange);

function oncheckboxChange() {
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);

  if (refs.checkbox.checked) {
    refs.checkbox.checked = true;

    localStorage.removeItem(STORAGE_KEY_THEME);
    localStorage.setItem(STORAGE_KEY_THEME, true);
  } else {
    refs.checkbox.checked = false;

    localStorage.removeItem(STORAGE_KEY_THEME);
    localStorage.setItem(STORAGE_KEY_THEME, false);
  }
}

function firstTheme() {
  if (JSON.parse(localStorage.getItem(STORAGE_KEY_THEME))) {
    refs.body.classList.add(Theme.DARK);
    refs.checkbox.checked = true;
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.checkbox.checked = false;
  }
}
