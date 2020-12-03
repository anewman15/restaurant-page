import { resetContentWrapper } from './tabbed_navigation';

export default function pageLoad() {
	resetContentWrapper();
	const contentWrapper = document.getElementById('content-wrapper');
	const contentHome = document.createElement('div');
	contentHome.setAttribute('id', 'content-home');
	contentHome.setAttribute('class', 'tab-content');

	contentHome.innerHTML = `
                            <p>Fresh, daily stunned chicken picked from our own farm. Delivered to any corner in the city. Just order and follow your delivery</p>
                            <p>We dedicate one chef each for our unique spicy Indian recipes, crispy and juicy fast served fried chicken, whole chicken rotisserie as well as Turkish Doner</p>
                            <p>All our items are charcoal free. We use electric oven for rotiserrie, baking and roasting</p>
                            <p>All come with our trademark Yumz cheeseNmustard&trade; sauce and a cold drink of your choice</p>
                            <p>Choose any type and weight of chicken one day ahead with our special FancyYumzPick&reg; and pick them directly from the farm using video call </p>
                          `;
	contentWrapper.appendChild(contentHome);
}