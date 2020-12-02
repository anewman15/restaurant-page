import displayTabbedNavigation from './tabbed_navigation';
import displayContentHome from './content_home';

export default function pageLoad(containerDiv) {
  displayTabbedNavigation(containerDiv);
  displayContentHome(containerDiv);
}