import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
	render() {
		return (
			<HeaderWrapper>
				<h1>Murray's Taco Joint</h1>
				<p>Pretty Good Tacos!</p>
			</HeaderWrapper>
		)
	}
};

export default Header;

const HeaderWrapper = styled.header`
	grid-area: span 2 / span 2;
	overflow: hidden;
	min-height: 400px;
	position: relative;
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;

	&:before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		z-index: -1;
		
		display: block;
		background: white url('https://www.fillmurray.com/g/820/540');
		background-size: cover;
		background-position: bottom right;
		width: 100%;
		height: 100%;
		
		-webkit-filter: blur(5px);
		-moz-filter: blur(5px);
		-o-filter: blur(5px);
		-ms-filter: blur(5px);
		filter: blur(5px);
	}

	& > * {
		background: yellow;
		padding: 5px;
	}
`