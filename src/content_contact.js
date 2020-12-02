import { resetContentWrapper } from './tabbed_navigation';

export default function displayContentContact() {
  resetContentWrapper();
  const contentWrapper = document.getElementById('content-wrapper');
  const contentMenu = document.createElement('div');
  contentMenu.setAttribute('id', 'content-menu');
  contentMenu.setAttribute('class', 'tab-content');

  contentMenu.innerHTML = `
                            <p>A Contact</p>
                            <p>Another Contact</p>
                            <p>Yet Another Contact</p>
                            <p>One More Contact</p>
                            <p>The Last Contact</p>
                          `
  contentWrapper.appendChild(contentMenu);
}