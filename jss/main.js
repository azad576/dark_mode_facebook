const settingmenu = document.querySelector(`.setting-menu`);
const darkbtn = document.getElementById(`dark_btn`);
const settingmentu_toggle = () => {
  settingmenu.classList.toggle("setting_menu_height");
};

darkbtn.onclick = () => {
  darkbtn.classList.toggle("dark_btn_on");

  document.body.classList.toggle("dark_theme");
};
