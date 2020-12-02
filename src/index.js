import displayContentHome from './content_home';
import './style.scss';

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

displayContentHome(contentContainer);