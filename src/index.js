import _ from 'lodash';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['hello', 'webpack1'], ' ');
  element.classList.add('hello');
  btn.innerHTML = 'click me';

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
