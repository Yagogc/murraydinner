import React, { Component } from 'react';
import styled from 'styled-components';
import Feature from './Feature';

class Features extends Component {
	render() {
		return (
			<FeaturesWrapper>
				<Feature icon="🌮" name="Tacos" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda." />
				<Feature icon="🍺" name="Beer" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda." />
				<Feature icon="🍷" name="Wine" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda." />
				<Feature icon="🎵" name="Music" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, assumenda." />
			</FeaturesWrapper>
		)
	}
};

export default Features;

const FeaturesWrapper = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`