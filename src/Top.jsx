import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header'

class Top extends Component {
	render() {
		return (
			<TopWrapper>
				<Header />
				<div className="cta cta1">
					<p className="price">$1.99</p>
					<p>Tacos</p>
				</div>
				<div className="cta cta2">
					<p className="price">$3.99</p>
					<p>Kombucha</p>
				</div>
			</TopWrapper>
		)
	}
};

export default Top;

const TopWrapper = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
`