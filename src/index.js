import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {injectGlobal, keyframes} from 'styled-components'

import bgImage from './topography.svg'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


injectGlobal`
	html {
		box-sizing: border-box;
		font-family: Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		font-weight: 900;
		font-size: 13px;
		color: black;
		text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body {
		background-image: url(${bgImage}), linear-gradient(110deg, #f93d66, #6d47d9);
		background-size: 340px, auto;
		min-height: calc(100vh - 100px);
		margin: 50px;
		/* background: white; */
		background-position: fixed;
		letter-spacing: -1px;
	}
`