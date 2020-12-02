export default function displayTabbedNavigation (containerDiv) {
  containerDiv.innerHTML = `
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