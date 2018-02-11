import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header'
import Cta from './Cta'

class Top extends Component {
	render() {
		return (
			<TopWrapper>
				<Header />
				<Cta price='$1.99' name='Tacos'/>
				<Cta price='$3.99' name='Kombucha'/>
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

	@media (max-width: 700px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 500px) {
		grid-template-columns: 1fr ;
		grid-template-rows: 1fr;
	}
`