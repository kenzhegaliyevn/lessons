import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the img to our existing div
    var myImg = new Image();
    myImg.src = Icon;

    element.appendChild(myImg);

    console.log(Data);
    return element;
}

document.body.appendChild(component());