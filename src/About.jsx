import React, { Component } from 'react';
import styled from 'styled-components';

import Taco from './queso-taco.png'

class About extends Component {
	render() {
		return (
			<AboutWrapper>
				<img src={Taco} alt="Yummy Taco"/>
				<div className="about__details">
					<h2>Featured Taco</h2>
					<p>Slim Profile, easy to hold and loaded with cheese.</p>
					<p>This is the one you have been waiting for</p>
					<Button>Learn More →</Button>
				</div>
			</AboutWrapper>
		)
	}
};

export default About;

const AboutWrapper = styled.div`
	background: white;
	padding:50px;
	display: grid;
	grid-template-columns: 400px 1fr;
	align-items: center;
`
const Button = styled.button`
	background: #ffc600;
	border: 0;
	padding: 10px 20px;
`