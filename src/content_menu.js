import { displayContentHome } from './content_home';
import { resetContentWrapper } from './tabbed_navigation';

export default function displayContentMenu() {
  resetContentWrapper();
  const contentWrapper = document.getElementById('content-wrapper');
  const contentMenu = document.createElement('div');
  contentMenu.setAttribute('id', 'content-menu');
  contentMenu.setAttribute('class', 'tab-content');

  contentMenu.innerHTML = `
                            <p>A Menu</p>
                            <p>Another Menu</p>
                            <p>Yet Another Menu</p>
                            <p>One More Menu</p>
                            <p>The Last Menu</p>
                          `
  contentWrapper.appendChild(contentMenu);
}