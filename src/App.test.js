import React from 'react';
import ReactDOM from 'react-dom';

import TestDrive from './testdrive';

var createComponent = require('react-unit');

 
var component = createComponent(<charts value="Graphs"/>);


const App = ({ width, height }) => <svg
	xmlns="http://www.w3.org/2000/svg"
	
	viewBox={`${0} ${0} ${width} ${height}`}>
	<my-app {...{ width, height }} />
</svg>;

ReactDOM.render(<App width={1920} height={1080} />,
document.getElementById('root'));