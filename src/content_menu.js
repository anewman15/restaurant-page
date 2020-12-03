import { resetContentWrapper } from './tabbed_navigation';

export default function displayContentMenu() {
	resetContentWrapper();
	const contentWrapper = document.getElementById('content-wrapper');
	const contentMenu = document.createElement('div');
	contentMenu.setAttribute('id', 'content-menu');
	contentMenu.setAttribute('class', 'tab-content');

	contentMenu.innerHTML = `
                            <div class="menu-item">
                              <div class="menu-details">
                                <p>Yumz Crispy Fried Chicken</p>
                                <p>2pc Drumsticks</p>
                                <p>1pc Thigh</p>
                                <p>1pc Chicken Breast</p>
                                <p>1cup Yumz cheeseNmustard&trade; Sauce</p>
                                <p>1 cold drink</p>
                                <p>Price: 480 Tk</p>
                              </div>
                              <div class="menu-image">
                                <img src="./logo.png">
                              </div>
                            </div>
                            <hr>
                            <div class="menu-item">
                              <div class="menu-details">
                                <p>Yumz Chicken Doner Shawarma</p>
                                <p>2 Slices of Chicken Shawarma</p>
                                <p>1cup Yumz cheeseNmustard&trade; Sauce</p>
                                <p>1 cold drink</p>
                                <p>Price: 320 Tk</p>
                              </div>
                              <div class="menu-image">
                              <img src="./logo.png">
                              </div>
                            </div>
                          `;
	contentWrapper.appendChild(contentMenu);
}