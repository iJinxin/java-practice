import _ from 'lodash';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['hello', 'webpack1'], ' ');
  element.classList.add('hello');
  btn.innerHTML = 'click me';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());