import { displayTabbedNavigation } from './tabbed_navigation';
import pageLoad from  './page_load';
import { reloadWithContentHome } from './content_home';
import displayContentMenu from './content_menu';
import './style.scss';

displayTabbedNavigation();
pageLoad();

const homeTab = document.getElementById('tab-home');
homeTab.style.cursor = 'pointer';
const menuTab = document.getElementById('tab-menu');
menuTab.style.cursor = 'pointer';
const contactTab = document.getElementById('tab-contact');
contactTab.style.cursor = 'pointer';


menuTab.addEventListener('click', displayContentMenu);
homeTab.addEventListener('click', pageLoad);
