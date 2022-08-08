import _ from 'lodash';
import './style.css';
import './ship.js';
import greet from './ship.js';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
  }

  greet('Hi')
  
  document.body.appendChild(component());