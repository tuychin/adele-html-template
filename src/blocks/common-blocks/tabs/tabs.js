function tabs(tabItems, contentItems, tabActiveClass, contentActiveClass) {

  for (let i = 0; i < tabItems.length; i++) {
    const tab = tabItems[i];
    const content = contentItems[i];
    tab.addEventListener('click', () => {

      tabItems.forEach(tab => {
        tab.classList.remove(tabActiveClass);
      });

      contentItems.forEach(content => {
        content.classList.remove(contentActiveClass);
      });

      tab.classList.add(tabActiveClass);
      content.classList.add(contentActiveClass);
    });
  }

}

export default tabs;