const displayTabbedNavigation = () => {
  const contentContainer = document.getElementById('content-container');
  contentContainer.innerHTML = `
                                <div class="tabs-wrapper">
                                  <div class="logo">
                                    <a href=""><img src="../src/logo.png" alt=""></a>
                                  </div>
                                  <div id="tab-home" class="tab">Home</div>
                                  <div id="tab-menu" class="tab">Menu</div>
                                  <div id="tab-contact" class="tab">Contact</div>
                                </div>
                              `
}

const resetContentWrapper = () => {
  const contentContainer = document.getElementById('content-container');
  if (document.getElementById('content-wrapper')) {
    const contentWrapper = document.getElementById('content-wrapper');
    contentWrapper.innerHTML = ``;
  } else {
    const contentWrapper = document.createElement('div');
    contentWrapper.setAttribute('id', 'content-wrapper');
    contentContainer.appendChild(contentWrapper);
  }
}

export { displayTabbedNavigation, resetContentWrapper };