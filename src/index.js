import _ from 'lodash';
import './assets/style/style.css';
// import './assets/style/demo.scss';
import './assets/font/iconfont.css'
import Test from './test';

Test.testConsole();

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
