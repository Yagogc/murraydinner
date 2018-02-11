import React, { Component } from 'react';
import styled from 'styled-components';

class Cta extends Component {
	render() {
		return (
			<CtaWrapper>
				<Price>{this.props.price}</Price>
				<p>{this.props.name}</p>
			</CtaWrapper>
		)
	}
};

export default Cta;

const CtaWrapper = styled.div`
	background: #ffc600;
	display: grid;
	align-items: center;
	justify-items: center;
	align-content: center;
	& p {
		margin: 0;
	}
`

const Price = styled.p`
	font-size: 60px;
	font-weight: 300;
`