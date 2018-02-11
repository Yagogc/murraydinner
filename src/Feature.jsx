import React, { Component } from 'react';
import styled from 'styled-components';

class Feature extends Component {
	render() {
		return (
			<FeatureWrapper>
				<Icon>{this.props.icon}</Icon>
				<h3>{this.props.name}</h3>
				<p>{this.props.desc}</p>
			</FeatureWrapper>
		)
	}
};

export default Feature;

const FeatureWrapper = styled.div`
	background: white;
	padding: 10px;
	border: 1px solid white;
	text-align: center;
	box-shadow: 0 0 4px  rgba(0,0,0,0.1);

	& p {
		color: rgba(0,0,0,0.5);
	}
`

const Icon = styled.span`
	font-size: 50px;
`