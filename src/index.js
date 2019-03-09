import _ from 'lodash';
import printMe from './print';
import './styles.css';

function component() {
	let main = document.createElement('div');
	let element = document.createElement('div');
	let element2 = document.createElement('div');
	let btn = document.createElement('button');

	element2.innerHTML = _.join(['Hello Mark'], ' ');
	element.innerHTML = _.join(['Hello mixed up thing--', 'webpack'], ' ');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	main.a
	main.appendChild(element2);
	main.appendChild(element);
	main.appendChild(btn);

	return main;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
  	console.log('Accepting the updated printMe module!');
  	printMe();
 })
}
