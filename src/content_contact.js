import { resetContentWrapper } from './tabbed_navigation';

export default function displayContentContact() {
  resetContentWrapper();
  const contentWrapper = document.getElementById('content-wrapper');
  const contentMenu = document.createElement('div');
  contentMenu.setAttribute('id', 'content-menu');
  contentMenu.setAttribute('class', 'tab-content');

  contentMenu.innerHTML = `
                            <div class="address">
                              <div class="">
                                <p>
                                  <span><strong>Order Online 7<sup>24</sup></strong> : </span>
                                  <span> &nbsp;&nbsp;+880 <strong>YUMZCHICKN</strong></span>
                                </p>
                              </div>
                              <hr>
                              <br>
                              <div class="">
                                <p><span>Chandina Kitchen: </span><br>
                                  <address>
                                    <strong>Yumz Chick'n</strong><br>
                                    Baganbari Road,<br>
                                    Chandina,<br>
                                    Comilla
                                  </address>
                                </p>
                              </div>
                            </div>
                          `
  contentWrapper.appendChild(contentMenu);
}