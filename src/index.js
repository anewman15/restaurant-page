// import displayContentHome from './content_home';
import pageLoad from  './page_load';
import './style.scss';

const contentContainer = document.getElementById('content-container');
const homeTab = document.getElementById('tab-home');
const menuTab = document.getElementById('tab-menu');
const contactTab = document.getElementById('tab-contact');

pageLoad(contentContainer);