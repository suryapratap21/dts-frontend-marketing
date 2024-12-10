"use client";
const useSubMenuToggle = () => {
  const toggleSubMenu = (e, cb) => {
    e.preventDefault();
    const listItem = e.target.parentElement;
    const subMenu = listItem.querySelector("ul.dropdown-menu");

    if (subMenu) {
      listItem.classList.toggle("on");
      subMenu.style.maxHeight =
        subMenu.style.maxHeight === "20000px" ? "0" : "20000px";
    }
    if (cb) cb();
  };

  return toggleSubMenu;
};

export default useSubMenuToggle;
